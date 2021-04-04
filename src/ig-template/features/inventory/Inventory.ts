import {cloneDeep} from 'lodash-es';

import {InventorySlot} from "@/ig-template/features/inventory/InventorySlot";
import {ItemId} from "@/ig-template/features/items/ItemId";
import {Feature} from "@/ig-template/features/Feature";
import {ItemList} from "@/ig-template/features/items/ItemList";
import {Features} from "@/ig-template/Features";
import {AbstractConsumable} from "@/ig-template/features/items/Consumable";
import {AbstractItem} from "@/ig-template/features/items/AbstractItem";
import {EmptyItem} from "@/ig-template/features/items/instances/EmptyItem";
import {InventorySaveData} from "@/ig-template/features/inventory/InventorySaveData";
import {InventorySlotSaveData} from "@/ig-template/features/inventory/InventorySlotSaveData";
import {EventDispatcher} from "strongly-typed-events";
import {ItemAmount} from "@/ig-template/features/items/ItemAmount";
import {DecimalValue} from "@/lib/DecimalValueType";
import Decimal from "@/lib/break_eternity.min";

export class Inventory extends Feature {
    slotCount: number;
    slots: InventorySlot[];

    // Overridden in initialize;
    _itemList: ItemList = undefined as unknown as ItemList;

    private _onItemGain = new EventDispatcher<AbstractItem, Decimal>();


    constructor(slots: number = 10) {
        super('inventory');
        this.slotCount = slots;
        this.slots = new Array(this.slotCount).fill(new InventorySlot(new EmptyItem(), 0));
    }


    initialize(features: Features) {
        super.initialize(features);
        this._itemList = features.itemList;
    }

    interactIndices(indexFrom: number, indexTo: number) {
        if (indexFrom === indexTo) {
            return;
        }

        const itemFrom = this.slots[indexFrom];

        if (itemFrom.isEmpty()) {
            console.warn("Cannot interact with empty item");
            return;
        }
        const itemTo = this.slots[indexTo];

        if (itemFrom.item.id === itemTo.item.id) {
            this.mergeItems(itemFrom, itemTo);
            return;
        }

        this.swapItems(indexFrom, indexTo);
        return;
    }

    mergeItems(itemFrom: InventorySlot, itemTo: InventorySlot) {
        if (itemFrom.item.id !== itemTo.item.id) {
            throw new Error(`Cannot merge items of types ${itemFrom.item.id} and ${itemTo.item.id}`);
        }

        const amount = itemFrom.amount.min(itemTo.spaceLeft());
        itemFrom.loseItems(amount);
        itemTo.gainItems(amount);
    }

    swapItems(indexFrom: number, indexTo: number) {
        const temp = this.slots[indexFrom];
        this.slots.splice(indexFrom, 1, this.slots[indexTo]);
        this.slots.splice(indexTo, 1, temp);

    }

    consumeItem(index: number, amount: DecimalValue = 1): boolean {
        const inventoryItem = this.slots[index];
        const item = inventoryItem.item;
        amount = new Decimal(amount);

        if (!(item instanceof AbstractConsumable)) {
            console.warn(`Item ${item} is not a consumable`);
            return false;
        }
        if (inventoryItem.amount.lt(amount)) {
            console.warn(`Amount of ${inventoryItem} is not greater than ${amount}`);
            return false;
        }
        if (!item.canConsume()) {
            console.warn("Cannot consume item, check its restrictions for the reason");
            return false;
        }

        if (amount.eq(1)) {
            item.consume();
        } else {
            item.consumeMultiple(amount);
        }
        this.loseItemAtIndex(index, amount);
        return true;
    }

    /**
     * Remove items from this inventory, prefer an empty stack
     * Recursively calls itself if stacks are emptying
     * Returns the number of items that still need to be removed
     * @param id
     * @param amount
     */
    loseItemAmount(id: ItemId, amount: DecimalValue = 1): Decimal {
        amount = new Decimal(amount);
        // While we still need to remove and have items left
        while (amount.gt(0) && this.getTotalAmount(id).gt(0)) {
            const nonFullStackIndex = this.getIndexOfNonFullStack(id)
            const indexToUse = nonFullStackIndex !== -1 ? nonFullStackIndex : this.getIndexOfItem(id);
            if (indexToUse === -1) {
                throw Error(`Index of item ${id} to lose is -1. This suggests an error in inventory management`);
            }
            const amountToRemove = amount.min(this.slots[indexToUse].amount);
            amount = amount.sub(amountToRemove);
            this.loseItemAtIndex(indexToUse, amountToRemove);

        }

        return amount;
    }

    public gainItem(item: AbstractItem, amount: DecimalValue = 1): Decimal {
        const amountLeft = this._gainItem(item, amount);
        this._onItemGain.dispatch(item, new Decimal(amount));
        return amountLeft;
    }

    /**
     * Add items to this inventory, prefer an existing stack
     * Recursively calls itself if stacks are overflowing
     * Returns the number of items that need to be added
     */
    private _gainItem(item: AbstractItem, amount: DecimalValue = 1): Decimal {
        amount = new Decimal(amount);

        // Find stack and add to it or create a new one
        const nonFullStackIndex = this.getIndexOfNonFullStack(item.id);
        if (nonFullStackIndex === -1) {
            // Create a new stack
            const emptyIndex = this.getIndexOfFirstEmptySlot();
            if (emptyIndex === -1) {
                console.log(`Cannot add ${amount} of ${item.id}, no empty slots left`);
                return amount;
            }
            const amountToAdd = amount.min(item.maxStack);
            this.slots.splice(emptyIndex, 1, new InventorySlot(item, amountToAdd));

            const amountLeft = amount.sub(amountToAdd);
            if (amountLeft.lte(0)) {
                return new Decimal(0);
            }
            return this._gainItem(item, amountLeft);
        } else {
            // Add to existing stack
            const amountToAdd = amount.min(this.slots[nonFullStackIndex].spaceLeft());

            this.slots[nonFullStackIndex].gainItems(amountToAdd);
            const amountLeft = amount.sub(amountToAdd);
            if (amountLeft.lte(0)) {
                return new Decimal(0);
            }
            return this._gainItem(item, amountLeft);
        }
    }

    getSpotsLeftForItem(item: AbstractItem) {
        let total = new Decimal(0);
        for (const inventoryItem of this.slots) {
            if (inventoryItem.isEmpty()) {
                total = total.add(item.maxStack);
            } else if (inventoryItem.item.id === item.id) {
                total = total.add(inventoryItem.spaceLeft());
            }
        }
        return total;
    }

    /**
     * This method very inefficiently clones the inventory, and simulates adding the items see if they can be taken.
     * It's also the only reason we're using lodash...
     * TODO do this in a smart way.
     */
    canTakeItemAmounts(itemAmounts: ItemAmount[]) {
        const clonedInventory = cloneDeep(this);
        for (const item of itemAmounts) {
            const amountLeft = clonedInventory.gainItem(this._itemList[item.id], item.amount);
            if (amountLeft.neq(0)) {
                return false;
            }
        }
        return true;
    }

    hasItemAmounts(amounts: ItemAmount[]) {
        for (const amount of amounts) {
            if (!this.hasItemAmount(amount)) {
                return false;
            }
        }
        return true;
    }

    hasItemAmount(amount: ItemAmount) {
        return this.getTotalAmount(amount.id).gte(amount.amount);
    }

    canTakeItem(item: AbstractItem, amount: DecimalValue) {
        return this.getSpotsLeftForItem(item).gte(amount);
    }

    getIndexOfNonFullStack(id: ItemId) {
        for (let i = 0; i < this.slots.length; i++) {
            if (this.slots[i].item.id === id && !this.slots[i].isFull()) {
                return i;
            }
        }
        return -1;
    }

    getIndexOfItem(id: ItemId) {
        for (let i = 0; i < this.slots.length; i++) {
            if (this.slots[i].item.id === id) {
                return i;
            }
        }
        return -1;
    }

    getIndexOfFirstEmptySlot(): number {
        for (let i = 0; i < this.slots.length; i++) {
            if (this.slots[i].isEmpty()) {
                return i;
            }
        }
        return -1;
    }

    hasEmptySlot(): boolean {
        return this.getIndexOfFirstEmptySlot() !== -1;
    }

    hasNonFullStack(id: ItemId): boolean {
        return this.getIndexOfNonFullStack(id) !== -1;
    }


    loseItemAtIndex(index: number, amount: DecimalValue = 1) {
        this.slots[index].loseItems(amount);
        if (this.slots[index].amount.lte(0)) {
            this.slots.splice(index, 1, new InventorySlot(new EmptyItem(), 0));
        }
    }

    dropStack(index: number) {
        this.loseItemAtIndex(index, this.slots[index].amount);
    }

    getEmptySlotCount(): number {
        let count = 0;
        for (const inventoryItem of this.slots) {
            if (inventoryItem.isEmpty()) {
                count++;
            }
        }
        return count;
    }


    getTotalAmount(id: ItemId): Decimal {
        let total = new Decimal(0);
        for (const inventoryItem of this.slots) {
            if (inventoryItem.item.id === id) {
                total = total.add(inventoryItem.amount);
            }
        }
        return total;
    }

    getAmount(index: number): Decimal {
        return this.slots[index].amount;
    }


    isEmpty(): boolean {
        for (const item of this.slots) {
            if (item.amount.neq(0)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Emitted whenever this inventory gains items (even if it can't take them).
     */
    public get onItemGain() {
        return this._onItemGain.asEvent();
    }

    load(data: InventorySaveData): void {
        if (!data.slots) {
            return;
        }
        for (let i = 0; i < data.slots.length; i++) {
            const slotData: InventorySlotSaveData = data.slots[i];
            if (slotData.id === ItemId.Empty) {
                continue;
            }

            try {
                const item = this._itemList[slotData.id];
                item.load(slotData.data);
                this.slots[i] = new InventorySlot(item, slotData.amount);
            } catch (e) {
                console.error(`Could not load Item ${slotData.id}. Make sure it has a getter in ItemList`);
            }

        }
    }

    save(): InventorySaveData {
        const slots = this.slots.map(slot => {
            return {
                id: slot.item.id,
                amount: slot.amount,
                data: slot.item.save()
            };
        });
        return {
            slots: slots
        }
    }

}
