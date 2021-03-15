import {Currency} from "@/ig-template/features/wallet/Currency";
import {Upgrade} from "@/ig-template/tools/upgrades/Upgrade";
import {UpgradeType} from "@/ig-template/tools/upgrades/UpgradeType";
import {UpgradeId} from "@/ig-template/tools/upgrades/UpgradeId";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";

export class DiscreteUpgrade extends Upgrade {

    costList: Currency[] = [];
    bonusList: number[] = []

    constructor(id: UpgradeId, type: UpgradeType, displayName: string, maxLevel: number, costList: Currency[], bonusList: number[]) {
        super(id, type, displayName, maxLevel);
        this.costList = costList;
        this.bonusList = bonusList;
    }

    getCost(): Currency {
        if (this.isMaxLevel()) {
            return new Currency(Infinity, 'none' as CurrencyType);
        }
        return this.costList[this.level];
    }

    getBonus(level: number = this.level): number {
        return this.bonusList[level];
    }

}