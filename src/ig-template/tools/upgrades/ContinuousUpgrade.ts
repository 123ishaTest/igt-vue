import {AbstractUpgrade} from "@/ig-template/tools/upgrades/AbstractUpgrade";
import {Currency} from "@/ig-template/features/wallet/Currency";
import {UpgradeId} from "@/ig-template/tools/upgrades/UpgradeId";
import {UpgradeType} from "@/ig-template/tools/upgrades/UpgradeType";

export class ContinuousUpgrade extends AbstractUpgrade {
    bonusFunc: (level: number) => number;
    costFunc: (level: number) => Currency;


    constructor(id: UpgradeId, type: UpgradeType, displayName: string, maxLevel: number, bonusFunc: (level: number) => number, costFunc: (level: number) => Currency) {
        super(id, type, displayName, maxLevel);
        this.bonusFunc = bonusFunc;
        this.costFunc = costFunc;
    }

    getBonusForLevel(level: number): number {
        return this.bonusFunc(level);
    }

    getCost(): Currency {
        return this.costFunc(this.level);
    }

}