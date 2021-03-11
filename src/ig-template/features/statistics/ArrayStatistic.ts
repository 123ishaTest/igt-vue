import {AbstractStatistic} from "@/ig-template/features/statistics/AbstractStatistic";
import {StatisticId} from "@/ig-template/features/statistics/StatisticId";

export class ArrayStatistic extends AbstractStatistic {
    value: number[];

    constructor(id: StatisticId, description: string, value: number[]) {
        super(id, description);
        this.value = value;
    }


}