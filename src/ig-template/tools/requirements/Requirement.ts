import {Progress} from "./Progress";

export abstract class Requirement {

    isCompleted(): boolean {
        return this.getActualValue() >= this.getTargetValue();
    }

    getProgress(): Progress {
        const targetValue = this.getTargetValue();
        return new Progress(Math.min(this.getActualValue(), targetValue), targetValue);
    }

    abstract hint(): string;

    abstract getActualValue(): number;

    abstract getTargetValue(): number;
}
