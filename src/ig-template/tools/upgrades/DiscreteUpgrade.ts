import {Currency} from "@/ig-template/features/wallet/Currency";
import {AbstractUpgrade} from "@/ig-template/tools/upgrades/AbstractUpgrade";
import {UpgradeType} from "@/ig-template/tools/upgrades/UpgradeType";
import {UpgradeId} from "@/ig-template/tools/upgrades/UpgradeId";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";

export class DiscreteUpgrade extends AbstractUpgrade {

    costList: Currency[] = [];
    bonusList: number[] = []

    constructor(id: UpgradeId, type: UpgradeType, displayName: string, maxLevel: number, costList: Currency[], bonusList: number[]) {
        super(id, type, displayName, maxLevel);
        this.costList = costList;
        this.bonusList = bonusList;
        if (this.costList.length + 1 !== this.bonusList.length) {
            throw new Error(`BonusList must have a length 1 larger than CostList, got (${this.bonusList.length}) and (${this.costList.length}) respectively`)
        }
    }

    getCost(): Currency {
        if (this.isMaxLevel()) {
            return new Currency(Infinity, 'none' as CurrencyType);
        }
        return this.costList[this.level];
    }

    getBonusForLevel(level: number): number {
        return this.bonusList[level];
    }

}