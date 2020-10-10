import {SaveData} from "@/ig-template/tools/saving/SaveData";

export interface WalletSaveData extends SaveData {
    money: number;
    secondary: number;
}
