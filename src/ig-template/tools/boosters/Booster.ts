import {BoosterTier} from "@/ig-template/tools/boosters/BoosterTier";
import {Wallet} from "@/ig-template/features/wallet/Wallet";

export class Booster {
    private readonly _wallet: Wallet;

    description: string;
    /**
     * Make sure tiers are increasing in bonuses. If the player can't afford one, we will try one tier lower.
     */
    tiers: BoosterTier[];
    currentTierIndex: number = -1;

    /**
     * What to apply when you can't afford the tier. Recommended 1 if multiplicative, 0 if additive
     */
    defaultOutput: number

    constructor(description: string, tiers: BoosterTier[], wallet: Wallet, defaultOutput: number) {
        this.description = description
        this.tiers = tiers;
        this.defaultOutput = defaultOutput;

        this._wallet = wallet;
    }

    /**
     * Pay the costs for running this Booster, and return the current bonus
     */
    perform(delta: number): number {
        if (!this._wallet) {
            throw new Error("Wallet is undefined in Booster, make sure it is set after the Wallet is initialized");
        }
        const currentTier = this.currentTier;
        if (!currentTier) {
            return this.defaultOutput;
        }

        const costs = currentTier.getCostPerDelta(delta);

        if (!this._wallet.payMultipleIfPossible(costs) || !currentTier.canUse()) {
            this.currentTierIndex--;
            return this.defaultOutput
        }

        return currentTier.output
    }

    selectTier(index: number) {
        if (this.tiers[index]?.canUse()) {
            this.currentTierIndex = index;
        }
    }

    get bonus() {
        return this.currentTier ? this.currentTier.output : this.defaultOutput;
    }

    get currentTier(): BoosterTier | null {
        return this.isActive ? this.tiers[this.currentTierIndex] : null;
    }

    get isActive() {
        return this.currentTierIndex >= 0 && this.currentTierIndex <= this.tiers.length;
    }

}
