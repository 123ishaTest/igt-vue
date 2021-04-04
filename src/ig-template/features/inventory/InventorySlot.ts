import {AbstractItem} from "@/ig-template/features/items/AbstractItem";
import Decimal from "@/lib/break_eternity.min";
import {DecimalValue} from "@/lib/DecimalValueType";

export class InventorySlot {
    item: AbstractItem;
    amount: Decimal;

    constructor(item: AbstractItem, amount: DecimalValue) {
        this.item = item;
        this.amount = new Decimal(amount);
    }

    isEmpty(): boolean {
        return this.amount.eq(0);
    }

    isFull(): boolean {
        return this.amount.gte(this.item.maxStack);
    }

    spaceLeft(): Decimal {
        return this.item.maxStack.sub(this.amount);
    }

    gainItems(amount: DecimalValue) {
        this.amount = this.amount.add(amount);
        if (this.amount.gt(this.item.maxStack)) {
            console.error(`Tried to have more than ${this.item.maxStack} of ${this.item.id} in one stack`);
            this.amount = this.item.maxStack;
        }
    }

    loseItems(amount: DecimalValue) {
        this.amount = this.amount.sub(amount);
        if (this.amount.lt(0)) {
            console.error(`Tried to have less than 0 of ${this.item.id} in one stack`);
            this.amount = new Decimal(0);
        }
    }
}
