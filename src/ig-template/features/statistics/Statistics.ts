/**
 * Statistics class to keep track of increasing numbers
 */
import {StatisticId} from "@/ig-template/features/statistics/StatisticId";
import {NumberStatistic} from "@/ig-template/features/statistics/NumberStatistic";
import {Feature} from "@/ig-template/features/Feature";
import {AbstractStatistic} from "@/ig-template/features/statistics/AbstractStatistic";
import {StatisticsSaveData} from "@/ig-template/features/statistics/StatisticsSaveData";
import {StatisticsValue} from "@/ig-template/features/statistics/StatisticsValueType";
import {Features} from "@/ig-template/Features";
import {Currency} from "@/ig-template/features/wallet/Currency";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";

export class Statistics extends Feature {

    list: Record<StatisticId, AbstractStatistic>


    constructor() {
        super('statistics');
        this.list = {} as Record<StatisticId, AbstractStatistic>;
    }

    initialize(features: Features): void {
        this.registerStatistic(new NumberStatistic(StatisticId.TotalMoneyGained, 'Total money'))

        features.wallet.onCurrencyGain.subscribe((currency: Currency) => {
            if (currency.type === CurrencyType.Money) {
                this.incrementNumberStatistic(StatisticId.TotalMoneyGained, currency.amount);
            }
        });
    }

    incrementNumberStatistic(id: StatisticId, amount = 1): void {
        if (!this.hasStatistic(id)) {
            console.warn(`Could not find statistic with id ${id}`)
            return;
        }
        this.list[id].value += amount;
    }

    public getStatistic(id: StatisticId): AbstractStatistic | null {
        if (!this.hasStatistic(id)) {
            console.warn(`Could not find statistic with id ${id}`)
            return null;
        } else {
            return this.list[id];
        }
    }

    private hasStatistic(id: StatisticId): boolean {
        return id in this.list
    }

    private registerStatistic(statistic: AbstractStatistic) {
        this.list[statistic.id] = statistic;
    }

    load(data: StatisticsSaveData): void {
        for (const id in data.list) {
            if (Object.prototype.hasOwnProperty.call(data.list, id)) {
                if (this.hasStatistic(id as StatisticId)) {
                    this.list[id as StatisticId].value = data.list[id as StatisticId];
                } else {
                    console.warn(`Could not load statistic ${id}`)
                }
            }
        }
    }

    parseSaveData(json: Record<string, unknown>): StatisticsSaveData {
        const data = new StatisticsSaveData();
        const list = json.list as Record<string, StatisticsValue>;
        for (const id in list) {
            if (Object.prototype.hasOwnProperty.call(list, id)) {
                data.addStatistic(id as StatisticId, list[id])
            }
        }
        return data;
    }

    save(): StatisticsSaveData {
        const data = new StatisticsSaveData();
        for (const id in this.list) {
            data.addStatistic(id as StatisticId, this.list[id as StatisticId].value);
        }
        return data;
    }

}