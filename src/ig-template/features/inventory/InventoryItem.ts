import {AbstractItem} from "@/ig-template/features/items/AbstractItem";

export class InventoryItem {
    item: AbstractItem;
    amount: number;

    constructor(item: AbstractItem, amount: number) {
        this.item = item;
        this.amount = amount;
    }

    isEmpty(): boolean {
        return this.amount === 0;
    }

    isFull(): boolean {
        return this.amount >= this.item.maxStack;
    }

    spaceLeft(): number {
        return this.item.maxStack - this.amount;
    }

    gainItems(amount: number) {
        this.amount += amount;
        if (this.amount > this.item.maxStack) {
            console.error(`Tried to have more than ${this.item.maxStack} of ${this.item.id} in one stack`);
            this.amount = this.item.maxStack;
        }
    }

    loseItems(amount: number) {
        this.amount -= amount;
        if (this.amount < 0) {
            console.error(`Tried to have less than 0 of ${this.item.id} in one stack`);
            this.amount = 0;
        }
    }
}
