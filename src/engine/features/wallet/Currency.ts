import {CurrencyType} from "./CurrencyType";

export class Currency {
    amount: number;
    type: CurrencyType;


    constructor(amount: number, type: CurrencyType) {
        this.amount = amount;
        this.type = type;
    }

    public toString(): string {
        return `Currency(${this.amount}, ${CurrencyType[this.type]})`;
    }
}
