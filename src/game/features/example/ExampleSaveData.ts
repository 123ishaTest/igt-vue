import {SaveData} from "@/engine/saving/SaveData";
import {UpgradeSaveData} from "@/engine/upgrades/UpgradeSaveData";
import {UpgradeListSaveData} from "@/engine/upgrades/UpgradeListSaveData";

export class ExampleSaveData extends SaveData {
    upgrades: UpgradeListSaveData<UpgradeSaveData>;

    constructor(upgrades: UpgradeListSaveData<UpgradeSaveData>) {
        super();
        this.upgrades = upgrades;
    }
}
