import {OptionValue} from "./OptionValueType";

export abstract class SettingOption {
    text: string;
    abstract value: OptionValue;

    protected constructor(text: string) {
        this.text = text;
    }
}
