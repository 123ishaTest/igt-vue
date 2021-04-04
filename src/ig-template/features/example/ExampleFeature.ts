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
import {SingleLevelUpgrade} from "@/ig-template/tools/upgrades/SingleLevelUpgrade";
import {ContinuousExpLevel} from "@/ig-template/tools/exp-level/ContinuousExpLevel";
import {GainMoneyPouchAction} from "@/ig-template/tools/actions/GainMoneyPouchAction";
import {RecipeAction} from "@/ig-template/tools/actions/RecipeAction";
import {ItemAmount} from "@/ig-template/features/items/ItemAmount";
import {ItemId} from "@/ig-template/features/items/ItemId";
import {GainItemAction} from "@/ig-template/tools/actions/GainItemAction";
import {Achievements} from "@/ig-template/features/achievements/Achievements";
import {AchievementId} from "@/ig-template/features/achievements/AchievementId";
import {CustomAchievement} from "@/ig-template/features/achievements/CustomAchievement";
import {ExampleFeatureSaveData} from "@/ig-template/features/example/ExampleFeatureSaveData";
import {Booster} from "@/ig-template/tools/boosters/Booster";
import {BoosterTier} from "@/ig-template/tools/boosters/BoosterTier";

export class ExampleFeature extends UpgradesFeature {

    moneyAdditiveUpgrade: DiscreteUpgrade;
    moneyMultiplicativeUpgrade: ContinuousUpgrade;
    singleLevelUpgrade: SingleLevelUpgrade;

    // Overridden in initialize
    fishAction = undefined as unknown as GainMoneyPouchAction;
    recipeAction = undefined as unknown as RecipeAction;

    _achievements: Achievements = undefined as unknown as Achievements

    /**
     * This boolean is set by a SpecialEvent
     */
    showEventButton: boolean = false;
    weeklyEventActive: boolean = false;

    exampleSkill: ContinuousExpLevel;

    booster: Booster = undefined as unknown as Booster;

    constructor() {
        super('example-feature');

        this.moneyAdditiveUpgrade = new DiscreteUpgrade(
            UpgradeId.MoneyAdditive,
            UpgradeType.Money,
            'Discrete Upgrade',
            20,
            CurrencyBuilder.createArray(ArrayBuilder.fromStartAndStepAdditive(10, 10, 20), CurrencyType.Money),
            ArrayBuilder.fromStartAndStepAdditive(1, 1, 21));
        this.moneyMultiplicativeUpgrade = new ContinuousUpgrade(
            UpgradeId.MoneyMultiplicative,
            UpgradeType.Money,
            'Continuous Upgrade',
            Infinity,
            (level) => {
                return 1 + level;
            }, (level) => {
                return new Currency(level * 10, CurrencyType.Money);
            })

        this.singleLevelUpgrade = new SingleLevelUpgrade(UpgradeId.SingleLevel, UpgradeType.None, 'Single Level', new Currency(1000, CurrencyType.Money), 1);

        this.upgrades = [
            this.moneyAdditiveUpgrade,
            this.moneyMultiplicativeUpgrade,
            this.singleLevelUpgrade
        ]

        this.exampleSkill = new ContinuousExpLevel(100, (level) => {
            return 1 / 8 * (level ** 2 - level + 600 * (2 ** (level / 7) - 2 ** (1 / 7)) / (2 ** (1 / 7) - 1))
        })
    }

    initialize(features: Features) {
        this._wallet = features.wallet;
        this._achievements = features.achievements;

        this.fishAction = new GainItemAction(ItemId.RawFish, 'Fish', 3, features.inventory, features.itemList);
        this.recipeAction = new RecipeAction('Cook the fish', 5, [new ItemAmount(ItemId.RawFish, 1)], [new ItemAmount(ItemId.CookedFish, 1)], features.inventory, features.itemList)

        this.booster = new Booster("Boost your experience gain by spending money every second", [
            new BoosterTier([new Currency(10, CurrencyType.Money)], 1.5, "1.5x"),
            new BoosterTier([new Currency(100, CurrencyType.Money)], 2, "2x"),
            new BoosterTier([new Currency(1000, CurrencyType.Money)], 3, "3x"),
        ], this._wallet, 1);
    }

    unlockHiddenAchievement(): void {
        const hiddenAchievement = this._achievements.getAchievement(AchievementId.ExampleAchievement) as CustomAchievement;
        hiddenAchievement.forceComplete();
    }

    update(delta: number) {
        this._wallet.gainCurrency(new Currency(this.moneyPerSecond() * delta, CurrencyType.Money));
        const xpToGain = this.moneyPerSecond() * delta / 10 * this.booster.perform(delta);
        this.exampleSkill.gainExperience(xpToGain);
        this.fishAction.perform(delta);
        this.recipeAction.perform(delta);
    }

    moneyPerSecond(): number {
        return this.moneyAdditiveUpgrade.getBonus() * this.moneyMultiplicativeUpgrade.getBonus();
    }


    save(): ExampleFeatureSaveData {
        return {
            ...super.save(),
            exp: this.exampleSkill.exp,
        };
    }

    load(data: ExampleFeatureSaveData) {
        super.load(data);
        this.exampleSkill.exp = data.exp ?? this.exampleSkill.exp;
    }
}
