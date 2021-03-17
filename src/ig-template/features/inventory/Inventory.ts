import {InventoryItem} from "@/ig-template/features/inventory/InventoryItem";
import {ItemId} from "@/ig-template/features/items/ItemId";
import {Feature} from "@/ig-template/features/Feature";
import {ItemList} from "@/ig-template/features/items/ItemList";
import {Features} from "@/ig-template/Features";
import {AbstractConsumable} from "@/ig-template/features/items/Consumable";
import {AbstractItem} from "@/ig-template/features/items/AbstractItem";
import {SaveData} from "@/ig-template/tools/saving/SaveData";
import {EmptyItem} from "@/ig-template/features/items/instances/EmptyItem";

export class Inventory extends Feature {
    slots: number;
    inventoryItems: InventoryItem[];

    // Overridden in initialize;
    _itemList: ItemList = undefined as unknown as ItemList;

    constructor() {
        super('inventory');
        this.slots = 10;
        this.inventoryItems = new Array(this.slots).fill(new InventoryItem(new EmptyItem(), 0));
    }


    initialize(features: Features) {
        super.initialize(features);
        this._itemList = features.itemList;
    }

    inventoryInteraction(indexFrom: number, indexTo: number) {
        if (indexFrom === indexTo) {
            return;
        }

        const itemFrom = this.inventoryItems[indexFrom];

        if (itemFrom.isEmpty()) {
            console.warn("Cannot interact with empty item");
            return;
        }
        const itemTo = this.inventoryItems[indexTo];

        if (itemFrom.item.id === itemTo.item.id) {
            this.mergeItems(itemFrom, itemTo);
            return;
        }

        this.swapItems(indexFrom, indexTo);
        return;
    }

    mergeItems(itemFrom: InventoryItem, itemTo: InventoryItem) {

        if (itemFrom.item.id !== itemTo.item.id) {
            throw new Error(`Cannot merge items of types ${itemFrom.item.id} and ${itemTo.item.id}`);
        }

        const amount = Math.min(itemFrom.amount, itemTo.spaceLeft());
        itemFrom.loseItems(amount);
        itemTo.gainItems(amount);
    }

    swapItems(indexFrom: number, indexTo: number) {
        const temp = this.inventoryItems[indexFrom];
        this.inventoryItems.splice(indexFrom, 1, this.inventoryItems[indexTo]);
        this.inventoryItems.splice(indexTo, 1, temp);

    }

    consumeItem(index: number): boolean {
        const inventoryItem = this.inventoryItems[index];
        const item = inventoryItem.item;


        if (!(item instanceof AbstractConsumable)) {
            console.warn(`Item ${item} is not a consumable`);
            return false;
        }
        if (inventoryItem.amount <= 0) {
            console.warn(`Amount of ${inventoryItem} is not greater than 0`);
            return false;
        }
        if (!item.canConsume()) {
            console.warn("Cannot consume item, check its restrictions for the reason");
            return false;
        }

        item.consume();
        this.loseItemAtIndex(index, 1);
        return true;
    }

    /**
     * Remove items from this inventory, prefer an empty stack
     * Recursively calls itself if stacks are emptying
     * Returns the number of items that still need to be removed
     * @param id
     * @param amount
     */
    loseItemAmount(id: ItemId, amount: number = 1): number {
        // While we still need to remove and have items left
        while (amount > 0 && this.getTotalAmount(id) > 0) {
            const nonFullStackIndex = this.getIndexOfNonFullStack(id)
            const indexToUse = nonFullStackIndex !== -1 ? nonFullStackIndex : this.getIndexOfItem(id);
            if (indexToUse === -1) {
                throw Error(`Index of item ${id} to lose is -1. This suggests an error in inventory management`);
            }
            const amountToRemove = Math.min(amount, this.inventoryItems[indexToUse].amount);
            amount -= amountToRemove;
            this.loseItemAtIndex(indexToUse, amountToRemove);

        }

        return amount;
    }

    /**
     * Add items to this inventory, prefer an existing stack
     * Recursively calls itself if stacks are overflowing
     * Returns the number of items that need to be added
     */
    gainItem(item: AbstractItem, amount: number = 1): number {

        // Find stack and add to it or create a new one
        const nonFullStackIndex = this.getIndexOfNonFullStack(item.id);
        if (nonFullStackIndex === -1) {
            // Create a new stack
            const emptyIndex = this.getIndexOfFirstEmptySlot();
            if (emptyIndex === -1) {
                console.log(`Cannot add ${amount} of ${item.id}, no empty slots left`);
                return amount;
            }
            const amountToAdd = Math.min(amount, item.maxStack);
            this.inventoryItems.splice(emptyIndex, 1, new InventoryItem(item, amountToAdd));

            const amountLeft = amount - amountToAdd;
            if (amountLeft <= 0) {
                return 0;
            }
            return this.gainItem(item, amountLeft);
        } else {
            // Add to existing stack
            const amountToAdd = Math.min(amount, this.inventoryItems[nonFullStackIndex].spaceLeft());

            this.inventoryItems[nonFullStackIndex].gainItems(amountToAdd);
            const amountLeft = amount - amountToAdd;
            if (amountLeft <= 0) {
                return 0;
            }
            return this.gainItem(item, amountLeft);
        }
    }

    getSpotsLeftForItem(item: AbstractItem) {

        let total = 0;
        for (const inventoryItem of this.inventoryItems) {
            if (inventoryItem.isEmpty()) {
                total += item.maxStack;
            } else if (inventoryItem.item.id === item.id) {
                total += inventoryItem.spaceLeft();
            }
        }
        return total;
    }

    canTakeItem(item: AbstractItem, amount: number) {
        return this.getSpotsLeftForItem(item) >= amount;
    }

    getIndexOfNonFullStack(id: ItemId) {
        for (let i = 0; i < this.inventoryItems.length; i++) {
            if (this.inventoryItems[i].item.id === id && !this.inventoryItems[i].isFull()) {
                return i;
            }
        }
        return -1;
    }

    getIndexOfItem(id: ItemId) {
        for (let i = 0; i < this.inventoryItems.length; i++) {
            if (this.inventoryItems[i].item.id === id) {
                return i;
            }
        }
        return -1;
    }

    getIndexOfFirstEmptySlot(): number {
        for (let i = 0; i < this.inventoryItems.length; i++) {
            if (this.inventoryItems[i].isEmpty()) {
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


    loseItemAtIndex(index: number, amount: number = 1) {
        this.inventoryItems[index].amount -= amount;
        if (this.inventoryItems[index].amount <= 0) {
            this.inventoryItems.splice(index, 1, new InventoryItem(this._itemList.getEmpty, 0));
        }
    }

    dropStack(index: number) {
        this.loseItemAtIndex(index, this.inventoryItems[index].amount);
    }

    getEmptySlotCount(): number {
        let count = 0;
        for (const inventoryItem of this.inventoryItems) {
            if (inventoryItem.isEmpty()) {
                count++;
            }
        }
        return count;
    }


    getTotalAmount(id: ItemId): number {
        let total = 0;
        for (const inventoryItem of this.inventoryItems) {
            if (inventoryItem.item.id === id) {
                total += inventoryItem.amount;
            }
        }
        return total;
    }

    getAmount(index: number): number {
        return this.inventoryItems[index].amount;
    }


    isEmpty(): boolean {
        for (const item of this.inventoryItems) {
            if (item.amount != 0) {
                return false;
            }
        }
        return true;
    }

    load(): void {
        // Empty
    }

    save(): SaveData {
        return {};
    }

}
