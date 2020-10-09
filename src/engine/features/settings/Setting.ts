import {SettingOption} from "./SettingOption";
import {OptionValue} from "./OptionValueType";

export class Setting {
    name: string;
    displayName: string;
    options: SettingOption[];
    defaultValue: OptionValue;
    value: OptionValue;

    // Leave options array empty to allow all options.
    constructor(name: string, displayName: string, options: SettingOption[], defaultValue: OptionValue) {
        this.name = name;
        this.displayName = displayName;
        this.options = options;
        this.defaultValue = defaultValue;
        this.value = this.defaultValue;
        this.set(defaultValue);
    }

    set(value: OptionValue): void {
        if (this.validValue(value)) {
            this.value = value;
        } else {
            console.warn(`${value.toString()} is not a valid value for setting ${this.name}`);
        }
    }

    validValue(value: OptionValue): boolean {
        if (!this.isUnlocked(value)) {
            return false;
        }

        if (this.options.length === 0) {
            return true;
        }
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].value === value) {
                return true;
            }
        }

        return false;
    }

    isSelected(value: OptionValue): boolean {
        return this.value === value;
    }


    isUnlocked(value: OptionValue): boolean {
        return true;
    }

}
