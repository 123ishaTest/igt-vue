/**
 * Generic upgrade class
 */
import {Saveable} from "@/ig-template/tools/saving/Saveable";
import {UpgradeType} from "@/ig-template/tools/upgrades/UpgradeType";
import {UpgradeId} from "@/ig-template/tools/upgrades/UpgradeId";
import {Currency} from "@/ig-template/features/wallet/Currency";
import {UpgradeSaveData} from "@/ig-template/tools/upgrades/UpgradeSaveData";
import {Wallet} from "@/ig-template/features/wallet/Wallet";

export abstract class Upgrade implements Saveable {
    id: UpgradeId;
    type: UpgradeType;
    displayName: string;
    maxLevel: number;
    level: number;

    protected constructor(id: UpgradeId, type: UpgradeType, displayName: string, maxLevel: number) {
        this.id = id;
        this.type = type;
        this.displayName = displayName;
        this.maxLevel = maxLevel;
        this.level = 0;
    }

    abstract getCost(): Currency;

    abstract getBonus(level: number): number;

    getUpgradeBonus(): number {
        if (!this.isMaxLevel()) {
            return this.getBonus(this.level + 1) - this.getBonus(this.level);
        }
        return 0;
    }

    isMaxLevel(): boolean {
        return this.level >= this.maxLevel;
    }

    canAfford(wallet: Wallet): boolean {
        return wallet.hasCurrency(this.getCost());
    }

    // Override in subclass when other requirements exist.
    canBuy(wallet: Wallet): boolean {
        return this.level < this.maxLevel && this.canAfford(wallet);
    }

    buy(wallet: Wallet): boolean {
        if (!this.canBuy(wallet)) {
            return false;
        }

        wallet.loseCurrency(this.getCost());
        this.levelUp();
        return true;
    }

    levelUp(): void {
        this.level = this.level + 1;
    }


    // Save logic
    saveKey: string = this.id;

    load(data: UpgradeSaveData): void {
        this.level = data.level;
    }

    save(): UpgradeSaveData {
        return {
            'id': this.id,
            'level': this.level,
        }
    }

}