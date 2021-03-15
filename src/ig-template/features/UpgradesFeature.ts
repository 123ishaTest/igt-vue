import {Upgrade} from "@/ig-template/tools/upgrades/Upgrade";
import {Wallet} from "@/ig-template/features/wallet/Wallet";
import {UpgradeId} from "@/ig-template/tools/upgrades/UpgradeId";
import {Feature} from "@/ig-template/features/Feature";
import {Features} from "@/ig-template/Features";

/**
 * An abstract class for all features that need to buy Upgrades
 */
export abstract class UpgradesFeature extends Feature {

    _wallet: Wallet = null as unknown as Wallet;
    upgrades: Upgrade[];

    protected constructor(saveKey: string, upgrades: Upgrade[]) {
        super(saveKey);
        this.upgrades = upgrades;
    }

    /**
     * When overriding, make sure to call super.initialize() or you won't have access to the _wallet
     */
    initialize(features: Features) {
        this._wallet = features.wallet;
    }

    getUpgrade(id: UpgradeId): Upgrade | undefined {
        return this.upgrades.find(upgrade => {
            return upgrade.id === id;
        });
    }

    buyUpgrade(upgrade: Upgrade): boolean {
        if (!this._wallet) {
            console.warn("Wallet not found, are you sure it is initialized?")
            return false;
        }
        if (!upgrade.canBuy(this._wallet)) {
            return false;
        }
        return upgrade.buy(this._wallet);
    }

    canAfford(upgrade: Upgrade): boolean {
        return this._wallet.hasCurrency(upgrade.getCost());
    }
}
