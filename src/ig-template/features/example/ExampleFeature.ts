import {SaveData} from "@/ig-template/tools/saving/SaveData";
import {DiscreteUpgrade} from "@/ig-template/tools/upgrades/DiscreteUpgrade";
import {UpgradeId} from "@/ig-template/tools/upgrades/UpgradeId";
import {UpgradeType} from "@/ig-template/tools/upgrades/UpgradeType";
import {CurrencyBuilder} from "@/ig-template/features/wallet/CurrencyBuilder";
import {ArrayBuilder} from "@/ig-template/util/ArrayBuilder";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {Features} from "@/ig-template/Features";
import {UpgradesFeature} from "@/ig-template/features/UpgradesFeature";
import {Currency} from "@/ig-template/features/wallet/Currency";
import {ContinuousUpgrade} from "@/ig-template/tools/upgrades/ContinuousUpgrade";

export class ExampleFeature extends UpgradesFeature {

    moneyUpgrade1: DiscreteUpgrade;
    moneyUpgrade2: ContinuousUpgrade;

    constructor() {
        super('example-feature');

        this.moneyUpgrade1 = new DiscreteUpgrade(
            UpgradeId.MoneyUpgrade1,
            UpgradeType.Money,
            'Discrete Upgrade',
            20,
            CurrencyBuilder.createArray(ArrayBuilder.fromStartAndStepAdditive(10, 10, 20), CurrencyType.Money),
            ArrayBuilder.fromStartAndStepAdditive(1, 1, 21));
        this.moneyUpgrade2 = new ContinuousUpgrade(
            UpgradeId.MoneyUpgrade2,
            UpgradeType.Money,
            'Continuous Upgrade',
            Infinity,
            (level) => {
                return 1 + level
            }, (level) => {
                return new Currency(level * 10, CurrencyType.Money);
            })


        this.upgrades = [
            this.moneyUpgrade1,
            this.moneyUpgrade2,
        ]
    }


    update(delta: number) {
        this._wallet.gainCurrency(new Currency(this.moneyPerSecond() * delta, CurrencyType.Money));
    }

    moneyPerSecond(): number {
        return this.moneyUpgrade1.getBonus() * this.moneyUpgrade2.getBonus();
    }


    initialize(features: Features) {
        this._wallet = features.wallet;
    }

    load(): void {
        // Empty
    }

    save(): SaveData {
        return {};
    }

}