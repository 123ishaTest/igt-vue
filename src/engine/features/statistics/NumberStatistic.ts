import {Statistic} from "./Statistic";
import {StatisticType} from "@/engine/features/statistics/StatisticType";

export class NumberStatistic extends Statistic {
    value: number;

    constructor(key: StatisticType, description: string, value: number = 0) {
        super(key, description);
        this.value = value;
    }

    public increment(amount: number = 1): void {
        this.value += amount
    }

}
