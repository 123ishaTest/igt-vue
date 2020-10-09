import {SettingOption} from "./SettingOption";

export class NumberOption extends SettingOption {
    value: number;

    constructor(text: string, value: number) {
        super(text);
        this.value = value;
    }
}
