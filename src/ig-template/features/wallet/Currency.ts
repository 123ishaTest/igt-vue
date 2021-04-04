import {CurrencyType} from "./CurrencyType";
import Decimal from "@/lib/break_eternity.min";
import {DecimalValue} from "@/lib/DecimalValueType";

/**
 * A class to store currency amounts
 */
export class Currency {
    amount: Decimal;
    type: CurrencyType;

    constructor(amount: DecimalValue, type: CurrencyType) {
        this.amount = new Decimal(amount);
        this.type = type;
    }

    /**
     * Whether or not this currency is valid. Your game can have different rules
     */
    public isValid(): boolean {
        if (isNaN(this.amount.sign) || isNaN(this.amount.layer) || isNaN(this.amount.mag)) {
            return false;
        }
        return this.amount.gt(0);
    }

    public toString(): string {
        return `Currency(${this.amount}, ${this.type})`;
    }
}
