import {Progress} from "./Progress";
import Decimal from "@/lib/break_eternity.min";
import {DecimalValue} from "@/lib/DecimalValueType";

/**
 * Abstract class that can be configured to whatever requirements you like.
 */
export abstract class Requirement {

    // Getters as the user should view these as attributes

    get isCompleted(): boolean {
        return this.actualValue >= this.targetValue;
    }

    get progress(): Progress {
        return new Progress(Decimal.min(this.actualValue, this.targetValue), this.targetValue);
    }

    abstract get hint(): string;

    abstract get actualValue(): DecimalValue;

    abstract get targetValue(): DecimalValue;
}
