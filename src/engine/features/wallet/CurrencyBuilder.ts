import {Currency} from "./Currency";
import {CurrencyType} from "./CurrencyType";

export abstract class CurrencyBuilder {

    static createArray(amounts: number[], type: CurrencyType): Currency[] {
        const array = [];
        for (let i = 0; i < amounts.length; i++) {
            array.push(new Currency(amounts[i], type));
        }
        return array;
    }
}
