import {Feature} from "@/game/Feature";
import {Upgrade} from "@/engine/upgrades/Upgrade";
import {ExampleSaveData} from "@/game/features/example/ExampleSaveData";
import {App} from "@/App.ts";
import {CurrencyBuilder} from "@/engine/features/wallet/CurrencyBuilder";
import {CurrencyType} from "@/engine/features/wallet/CurrencyType";
import {UpgradeList} from "@/engine/upgrades/UpgradeList";
import {UpgradeSaveData} from "@/engine/upgrades/UpgradeSaveData";
import {UpgradeType} from "@/engine/upgrades/UpgradeType";
import {TotalMoneyRequirement} from "@/engine/requirements/TotalMoneyRequirement";

export class Example extends Feature {
    name = "Example"

    public upgrades: UpgradeList<Upgrade, UpgradeSaveData>;
    public requirement: TotalMoneyRequirement;
    public clicks: number;

    public constructor() {
        super();
        this.clicks = 0;
        this.requirement = new TotalMoneyRequirement(100);
        this.upgrades = new UpgradeList<Upgrade, UpgradeSaveData>([
            new Upgrade(
                "example-upgrade",
                UpgradeType.Money, "More money", 3,
                CurrencyBuilder.createArray([5, 10, 25], CurrencyType.money),
                [1, 2, 3, 5]),
            new Upgrade(
                "example-upgrade-2",
                UpgradeType.Money, "Even More money", 3,
                CurrencyBuilder.createArray([5, 10, 25], CurrencyType.money),
                [1, 2, 3, 5])
        ]);


    }

    update(delta: number): void {
        App.game.wallet.gainMoney(this.upgrades.getTotalMultiplierForType(UpgradeType.Money) * delta);
    }

    // Saving logic
    saveKey = "example";

    load(data: ExampleSaveData): void {
        this.upgrades.load(data.upgrades);
    }

    parseSaveData(json: Record<string, unknown>): ExampleSaveData {
        return new ExampleSaveData(this.upgrades.parseSaveData(json?.upgrades as Record<string, unknown>));
    }

    save(): ExampleSaveData {
        return new ExampleSaveData(this.upgrades.save());
    }

}
