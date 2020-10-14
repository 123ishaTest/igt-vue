import {SaveData} from "@/ig-template/tools/saving/SaveData";
import {SettingId} from "@/ig-template/features/settings/SettingId";

export interface SettingSaveData extends SaveData {
    id: SettingId,
    value: any,
}

export interface SettingsSaveData extends SaveData {
    list: SettingSaveData[],
}
