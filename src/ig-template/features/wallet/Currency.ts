import {CurrencyType} from "./CurrencyType";

/**
 * A class to store currency amounts
 */
export class Currency {
    amount: number;
    type: CurrencyType;

    constructor(amount: number, type: CurrencyType) {
        this.amount = amount;
        this.type = type;
    }

    /**
     * Whether or not this currency is valid. Your game can have different rules
     */
    public isValid(): boolean {
        if (isNaN(this.amount)) {
            return false;
        }
        return this.amount > 0;
    }

    public toString(): string {
        return `Currency(${this.amount}, ${this.type})`;
    }

    // Math methods as TS does not support operator overloading
    public add(amount: number) {
        this.amount += amount;
    }

    public subtract(amount: number) {
        this.amount -= amount;
    }

    public multiply(amount: number) {
        this.amount *= amount;
    }

    public divide(amount: number) {
        if (amount === 0) {
            console.error(`Cannot divide ${this} by 0`);
            return;
        }
        this.amount /= amount;
    }
}
