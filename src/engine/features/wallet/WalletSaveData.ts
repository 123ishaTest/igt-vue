import {SaveData} from "@/engine/saving/SaveData";

export class WalletSaveData extends SaveData {
    money: number;
    other: number;


    constructor(money: number, other: number) {
        super();
        this.money = money;
        this.other = other;
    }
}
