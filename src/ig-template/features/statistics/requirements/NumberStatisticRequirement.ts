import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {NumberStatistic} from "@/ig-template/features/statistics/NumberStatistic";
import Decimal from "@/lib/break_eternity.min";
import {DecimalValue} from "@/lib/DecimalValueType";

export class NumberStatisticRequirement extends Requirement {
    statistic: NumberStatistic;
    targetValue: Decimal;


    constructor(statistic: NumberStatistic, targetValue: DecimalValue) {
        super();
        this.statistic = statistic;
        this.targetValue = new Decimal(targetValue);
    }

    get actualValue(): Decimal {
        return this.statistic.value;
    }

    get hint(): string {
        return `The statistic ${this.statistic.description} needs to be at least ${this.targetValue}`;
    }
}