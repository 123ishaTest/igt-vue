import {Setting} from "./Setting";
import {SettingOption} from "./SettingOption";
import {OptionValue} from "./OptionValueType";

export class MultipleChoiceSetting extends Setting {
    constructor(name: string, displayName: string, options: SettingOption[], defaultValue: OptionValue) {
        super(name, displayName, options, defaultValue);
    }
}
