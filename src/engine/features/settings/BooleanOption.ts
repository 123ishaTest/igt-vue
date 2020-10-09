import {SettingOption} from "./SettingOption";

export class BooleanOption extends SettingOption {
    value: boolean;

    constructor(text: string, value: boolean) {
        super(text);
        this.value = value;
    }
}
