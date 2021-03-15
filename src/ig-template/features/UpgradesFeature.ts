import {AbstractUpgrade} from "@/ig-template/tools/upgrades/AbstractUpgrade";
import {Wallet} from "@/ig-template/features/wallet/Wallet";
import {UpgradeId} from "@/ig-template/tools/upgrades/UpgradeId";
import {Feature} from "@/ig-template/features/Feature";
import {Features} from "@/ig-template/Features";
import {UpgradesFeatureSaveData} from "@/ig-template/tools/saving/UpgradesFeatureSaveData";

/**
 * An abstract class for all features that need to buy Upgrades
 */
export abstract class UpgradesFeature extends Feature {

    _wallet: Wallet = null as unknown as Wallet;
    upgrades: AbstractUpgrade[];

    protected constructor(saveKey: string, upgrades: AbstractUpgrade[] = []) {
        super(saveKey);
        this.upgrades = upgrades;
    }

    /**
     * When overriding, make sure to call super.initialize() or you won't have access to the _wallet
     */
    initialize(features: Features) {
        this._wallet = features.wallet;
    }

    getUpgrade(id: UpgradeId): AbstractUpgrade | undefined {
        return this.upgrades.find(upgrade => {
            return upgrade.id === id;
        });
    }

    buyUpgrade(upgrade: AbstractUpgrade): boolean {
        if (!this._wallet) {
            console.warn("Wallet not found, are you sure it is initialized?")
            return false;
        }
        if (!upgrade.canBuy(this._wallet)) {
            return false;
        }
        return upgrade.buy(this._wallet);
    }

    canAfford(upgrade: AbstractUpgrade): boolean {
        return upgrade.canAfford(this._wallet);
    }

    /**
     * IMPORTANT: Make sure to call super().load(data) when overriding to also load upgrades.
     */
    load(data: UpgradesFeatureSaveData) {
        data.upgrades?.forEach(upgradeSaveData => {
            this.getUpgrade(upgradeSaveData.id as UpgradeId)?.load(upgradeSaveData);
        });
    }

    /**
     * IMPORTANT: Make sure to call super().save() when overriding to also save upgrades.
     */
    save(): UpgradesFeatureSaveData {
        return {
            upgrades: this.upgrades.map(upgrade => {
                return upgrade.save();
            })
        }
    }
}
