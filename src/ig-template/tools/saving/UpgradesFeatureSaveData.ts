import {SaveData} from "@/ig-template/tools/saving/SaveData";
import {UpgradeSaveData} from "@/ig-template/tools/upgrades/UpgradeSaveData";

export interface UpgradesFeatureSaveData extends SaveData {
    upgrades: UpgradeSaveData[];
}
