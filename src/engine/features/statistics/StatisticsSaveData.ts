import {StatisticsValue} from "./StatisticsValueType";
import {StatisticType} from "@/engine/features/statistics/StatisticType";

export class StatisticsSaveData {
    list: Record<StatisticType, StatisticsValue>;

    constructor() {
        this.list = {} as Record<StatisticType, StatisticsValue>;
    }

    addStatistic(key: StatisticType, value: StatisticsValue): void {
        this.list[key] = value;
    }

}
