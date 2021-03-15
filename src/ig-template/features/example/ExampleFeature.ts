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

export class ExampleFeature extends UpgradesFeature {

    constructor() {
        super('example-feature');

        this.upgrades = [
            new DiscreteUpgrade(
                UpgradeId.MoneyUpgrade1,
                UpgradeType.Money,
                'Example Upgrade',
                10,
                CurrencyBuilder.createArray(ArrayBuilder.fromStartAndStepAdditive(10, 10, 10), CurrencyType.Money),
                ArrayBuilder.fromStartAndStepAdditive(0, 1, 11))
        ]
    }


    update(delta: number) {
        this._wallet.gainCurrency(new Currency(this.moneyPerSecond() * delta, CurrencyType.Money));
    }

    moneyPerSecond(): number {
        return 1 + (this.getUpgrade(UpgradeId.MoneyUpgrade1)?.getBonus() ?? 0);
    }


    initialize(features: Features) {
        this._wallet = features.wallet;
    }

    load(data: SaveData): void {
        // Empty
    }

    save(): SaveData {
        return {};
    }

}