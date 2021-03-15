import {DiscreteUpgrade} from "@/ig-template/tools/upgrades/DiscreteUpgrade";
import {UpgradeType} from "@/ig-template/tools/upgrades/UpgradeType";
import {UpgradeId} from "@/ig-template/tools/upgrades/UpgradeId";
import {Currency} from "@/ig-template/features/wallet/Currency";

/**
 * An upgrade with a max level of 1
 */
export class SingleLevelUpgrade extends DiscreteUpgrade {

    constructor(id: UpgradeId, type: UpgradeType, displayName: string, cost: Currency, bonus: number) {
        super(id, type, displayName, 1, [cost], [0, bonus]);
    }

    isBought(): boolean {
        return this.isMaxLevel();
    }

}