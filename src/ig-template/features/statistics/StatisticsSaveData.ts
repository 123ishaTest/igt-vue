import {StatisticsValue} from "./StatisticsValueType";
import {StatisticId} from "@/ig-template/features/statistics/StatisticId";

export class StatisticsSaveData {
    list: Record<StatisticId, StatisticsValue>;

    constructor() {
        this.list = {} as Record<StatisticId, StatisticsValue>;
    }

    addStatistic(id: StatisticId, value: StatisticsValue): void {
        this.list[id] = value;
    }

}