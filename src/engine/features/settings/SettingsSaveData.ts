import {OptionValue} from "./OptionValueType";

export class SettingsSaveData {
    list: Record<string, OptionValue>;


    constructor() {
        this.list = {};
    }

    addSetting(key: string, value: OptionValue): void {
        this.list[key] = value;
    }

}
