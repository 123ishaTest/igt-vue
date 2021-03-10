import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {NumberStatistic} from "@/ig-template/features/statistics/NumberStatistic";

export class NumberStatisticRequirement extends Requirement {
    statistic: NumberStatistic;
    targetValue: number;


    constructor(statistic: NumberStatistic, targetValue: number) {
        super();
        this.statistic = statistic;
        this.targetValue = targetValue;
    }

    getTargetValue(): number {
        return this.targetValue;
    }

    get actualValue(): number {
        return this.statistic.value;
    }

    get hint(): string {
        return `The statistic ${this.statistic.description} needs to be at least ${this.targetValue}`;
    }
}