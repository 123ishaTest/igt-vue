import {Currency} from "./Currency";
import {CurrencyType} from "./CurrencyType";

export abstract class CurrencyBuilder {

    static createArray(amounts: number[], type: CurrencyType): Currency[] {
        return amounts.map(amount => new Currency(amount, type));
    }
}
