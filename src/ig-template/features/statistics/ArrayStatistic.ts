import {AbstractStatistic} from "@/ig-template/features/statistics/AbstractStatistic";
import {StatisticId} from "@/ig-template/features/statistics/StatisticId";
import Decimal from "@/lib/break_eternity.min";
import {DecimalValue} from "@/lib/DecimalValueType";
import {StatisticsValue} from "@/ig-template/features/statistics/StatisticsValueType";

export class ArrayStatistic extends AbstractStatistic {
    value: Decimal[];

    constructor(id: StatisticId, description: string, value: DecimalValue[]) {
        super(id, description);
        this.value = value.map(v => new Decimal(v));
    }

    load(value: StatisticsValue) {
        this.value = (value as DecimalValue[]).map(v => new Decimal(v));
    }

}