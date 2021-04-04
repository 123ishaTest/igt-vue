import {Currency} from "./Currency";
import {CurrencyType} from "./CurrencyType";
import {DecimalValue} from "@/lib/DecimalValueType";

export abstract class CurrencyBuilder {

    static createArray(amounts: DecimalValue[], type: CurrencyType): Currency[] {
        return amounts.map(amount => new Currency(amount, type));
    }
}
