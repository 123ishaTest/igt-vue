import {UpgradeSaveData} from "./UpgradeSaveData";

export class ExpUpgradeSaveData extends UpgradeSaveData {
    exp: number;

    constructor(key: string, level: number, exp: number) {
        super(key, level)
        this.exp = exp;
    }
}
