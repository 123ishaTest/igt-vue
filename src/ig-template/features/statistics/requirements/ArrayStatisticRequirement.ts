import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {ArrayStatistic} from "@/ig-template/features/statistics/ArrayStatistic";
import Decimal from "@/lib/break_eternity.min";
import {DecimalValue} from "@/lib/DecimalValueType";

export class ArrayStatisticRequirement extends Requirement {
    statistic: ArrayStatistic;
    index: number
    targetValue: Decimal;


    constructor(statistic: ArrayStatistic, index: number, targetValue: DecimalValue) {
        super();
        this.statistic = statistic;
        this.index = index;
        this.targetValue = new Decimal(targetValue);
    }

    get actualValue(): Decimal {
        return this.statistic.value[this.index];
    }

    get hint(): string {
        return `The statistic ${this.statistic.description} needs to be at least ${this.targetValue}`;
    }
}