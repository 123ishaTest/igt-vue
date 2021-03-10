import {Requirement} from "@/ig-template/tools/requirements/Requirement";

/**
 * A requirement that is never completed
 */
export class ImpossibleRequirement extends Requirement {

    get isCompleted(): boolean {
        return false;
    }

    get actualValue(): number {
        return 0;
    }

    get hint(): string {
        return "Impossible to complete";
    }

    get targetValue(): number {
        return 1;
    }
}
