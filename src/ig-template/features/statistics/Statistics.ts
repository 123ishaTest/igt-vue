/**
 * Statistics class to keep track of increasing numbers
 */
import {StatisticId} from "@/ig-template/features/statistics/StatisticId";
import {NumberStatistic} from "@/ig-template/features/statistics/NumberStatistic";
import {Feature} from "@/ig-template/features/Feature";
import {AbstractStatistic} from "@/ig-template/features/statistics/AbstractStatistic";
import {StatisticsSaveData} from "@/ig-template/features/statistics/StatisticsSaveData";
import {Features} from "@/ig-template/Features";
import {Currency} from "@/ig-template/features/wallet/Currency";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {ArrayStatistic} from "@/ig-template/features/statistics/ArrayStatistic";
import {DecimalValue} from "@/lib/DecimalValueType";

export class Statistics extends Feature {

    list: Record<StatisticId, AbstractStatistic>

    public totalMoneyGained: NumberStatistic;

    constructor() {
        super('statistics');
        this.list = {} as Record<StatisticId, AbstractStatistic>;

        // You can register statistics as attributes for easy access, but you don't have to.
        this.totalMoneyGained = this.registerStatistic(new NumberStatistic(StatisticId.TotalMoneyGained, 'Total money'));
    }

    initialize(features: Features): void {
        features.wallet.onCurrencyGain.subscribe((currency: Currency) => {
            if (currency.type === CurrencyType.Money) {
                this.incrementNumberStatistic(StatisticId.TotalMoneyGained, currency.amount);
            }
        });
    }

    incrementNumberStatistic(id: StatisticId, amount: DecimalValue = 1): void {
        if (!this.hasStatistic(id)) {
            console.warn(`Could not find statistic with id ${id}`)
            return;
        }
        const statistic = this.list[id];
        if (!(statistic instanceof NumberStatistic)) {
            console.warn(`Trying to treat ${id} as NumberStatistic but it's not.`);
            return;
        }
        statistic.value = statistic.value.add(amount);
    }

    incrementArrayStatistic(id: StatisticId, index: number, amount: DecimalValue = 1): void {
        if (!this.hasStatistic(id)) {
            console.warn(`Could not find statistic with id ${id}`)
            return;
        }
        const statistic = this.list[id];
        if (!(statistic instanceof ArrayStatistic)) {
            console.warn(`Trying to treat ${id} as ArrayStatistic but it's not.`);
            return;
        }
        const newValue = statistic.value[index].add(amount);
        statistic.value.splice(index, 1, newValue);
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

    public registerStatistic<T extends AbstractStatistic>(statistic: T): T {
        this.list[statistic.id] = statistic;
        return statistic;
    }

    load(data: StatisticsSaveData): void {
        for (const id in data.list) {
            if (Object.prototype.hasOwnProperty.call(data.list, id)) {
                if (this.hasStatistic(id as StatisticId)) {
                    console.log(id, data.list[id as StatisticId]);
                    this.list[id as StatisticId].load(data.list[id as StatisticId]);
                } else {
                    console.warn(`Could not load statistic ${id}`)
                }
            }
        }
    }


    save(): StatisticsSaveData {
        const data = new StatisticsSaveData();
        for (const id in this.list) {
            data.addStatistic(id as StatisticId, this.list[id as StatisticId].value);
        }
        return data;
    }

}