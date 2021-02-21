import {StatisticId} from "@/ig-template/features/statistics/StatisticId";
import {StatisticsValue} from "@/ig-template/features/statistics/StatisticsValueType";

export abstract class AbstractStatistic {
    id: StatisticId;
    description: string;
    abstract value: StatisticsValue;

    protected constructor(id: StatisticId, description: string) {
        this.id = id;
        this.description = description;
    }

}