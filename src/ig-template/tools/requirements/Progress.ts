import Decimal from "@/lib/break_eternity.min";
import {DecimalValue} from "@/lib/DecimalValueType";

export class Progress {
    actual: Decimal;
    target: Decimal;

    constructor(actual: DecimalValue, target: DecimalValue) {
        this.actual = new Decimal(actual);
        this.target = new Decimal(target);
    }

    getPercentage(): number {
        return this.actual.div(this.target).clamp(0, 1).toNumber();
    }
}
