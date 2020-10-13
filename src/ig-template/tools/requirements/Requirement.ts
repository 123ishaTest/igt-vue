import {RequirementProgress} from "./RequirementProgress";

/**
 * Abstract class that can be configured to whatever requirements you like.
 */
export abstract class Requirement {

    // Getters as the user should view these as attributes

    get isCompleted(): boolean {
        return this.actualValue >= this.targetValue;
    }

    get progress(): RequirementProgress {
        return new RequirementProgress(Math.min(this.actualValue, this.targetValue), this.targetValue);
    }

    abstract get hint(): string;

    abstract get actualValue(): number;

    abstract get targetValue(): number;
}
