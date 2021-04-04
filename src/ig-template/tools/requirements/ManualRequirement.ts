import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {DecimalValue} from "@/lib/DecimalValueType";

/**
 * A requirement that can be manually set to be completed
 */
export class ManualRequirement extends Requirement {
    isSet: boolean

    constructor() {
        super();
        this.isSet = false;
    }

    forceCompletion(): void {
        this.isSet = true;
    }

    get isCompleted(): boolean {
        return this.isSet;
    }

    get actualValue(): DecimalValue {
        return this.isSet ? this.targetValue : 0;
    }

    get hint(): string {
        return "Can only be manually completed";
    }

    get targetValue(): number {
        return 1;
    }
}
