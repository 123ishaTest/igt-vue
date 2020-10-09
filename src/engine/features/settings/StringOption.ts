import {SettingOption} from "./SettingOption";

export class StringOption extends SettingOption {
    value: string;

    constructor(text: string, value: string) {
        super(text);
        this.value = value;
    }
}
