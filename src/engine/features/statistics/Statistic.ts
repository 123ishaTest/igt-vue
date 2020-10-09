import {StatisticType} from "@/engine/features/statistics/StatisticType";

export abstract class Statistic {
    key: StatisticType;
    description: string;
    abstract value: any;

    protected constructor(key: StatisticType, description: string) {
        this.key = key;
        this.description = description;
    }

}
