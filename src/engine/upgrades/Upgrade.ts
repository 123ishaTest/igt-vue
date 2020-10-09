import {Saveable} from "../saving/Saveable";
import {UpgradeSaveData} from "./UpgradeSaveData";
import {Currency} from "@/engine/features/wallet/Currency";
import {CurrencyType} from "@/engine/features/wallet/CurrencyType";
import {App} from "@/App.ts";
import {UpgradeType} from "@/engine/upgrades/UpgradeType";

/**
 * Generic upgrade class
 */
export class Upgrade implements Saveable {
    identifier: string;
    type: UpgradeType;
    displayName: string;
    maxLevel: number;
    level: number;

    // Describes whether this upgrade increases or decreases a number.
    // (e.g. power is increasing, time is decreasing).
    increasing: boolean;

    // Optional array of costs
    costList: Currency[] = [];
    // Optional array of benefits
    bonusList: number[] = [];

    constructor(identifier: string, type: UpgradeType, displayName: string, maxLevel: number, costList: Currency[], bonusList: number[], increasing = true) {
        this.identifier = identifier;
        this.type = type;
        this.displayName = displayName;
        this.maxLevel = maxLevel;
        this.level = 0;
        this.costList = costList;
        this.bonusList = bonusList;
        this.increasing = increasing;
    }

    getCost(): Currency {
        if (this.isMaxLevel()) {
            return new Currency(Infinity, CurrencyType.money);
        }
        return this.costList[this.level];
    }

    // Override with a custom function
    getBonus(level: number = this.level): number {
        return this.bonusList[level];
    }

    upgradeBonus() {
        if (!this.isMaxLevel()) {
            return this.getBonus(this.level + 1) - this.getBonus(this.level);
        }
        return 0;
    }

    isMaxLevel() {
        return this.level >= this.maxLevel;
    }

    canAfford(): boolean {
        return App.game.wallet.hasCurrency(this.getCost());
    }

    // Override in subclass when other requirements exist.
    canBuy(): boolean {
        return this.level < this.maxLevel && this.canAfford();
    }

    buy(): void {
        if (this.canBuy()) {
            App.game.wallet.loseCurrency(this.getCost());
            this.levelUp();
        }
    }

    levelUp(): void {
        this.level = this.level + 1;
    }

    // Save logic
    saveKey: string = this.identifier;

    load(data: UpgradeSaveData): void {
        this.level = data.level;
    }

    parseSaveData(json: Record<string, unknown>): UpgradeSaveData {
        return new UpgradeSaveData(json?.key as string, json?.level as number ?? 0)
    }

    save(): UpgradeSaveData {
        return new UpgradeSaveData(this.identifier, this.level)
    }

}
