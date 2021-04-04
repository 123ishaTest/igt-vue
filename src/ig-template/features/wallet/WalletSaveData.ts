import {SaveData} from "@/ig-template/tools/saving/SaveData";

export interface WalletSaveData extends SaveData {
    money: string;
    secondary: string;
}
