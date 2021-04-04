import {AbstractStatistic} from "@/ig-template/features/statistics/AbstractStatistic";
import {StatisticId} from "@/ig-template/features/statistics/StatisticId";
import Decimal from "@/lib/break_eternity.min";
import {DecimalValue} from "@/lib/DecimalValueType";
import {StatisticsValue} from "@/ig-template/features/statistics/StatisticsValueType";

export class NumberStatistic extends AbstractStatistic {
    value: Decimal;

    constructor(id: StatisticId, description: string, value: DecimalValue = 0) {
        super(id, description);
        this.value = new Decimal(value);
    }

    load(value: StatisticsValue) {
        this.value = new Decimal(value as DecimalValue);
    }

}