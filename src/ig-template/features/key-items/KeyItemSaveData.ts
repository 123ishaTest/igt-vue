import {SaveData} from "@/ig-template/tools/saving/SaveData";
import {KeyItemId} from "@/ig-template/features/key-items/KeyItemId";

export interface KeyItemSaveData extends SaveData {
    list: KeyItemId[];
}
