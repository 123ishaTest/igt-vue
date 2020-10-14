import {Setting} from "@/ig-template/features/settings/Setting";
import {SettingId} from "@/ig-template/features/settings/SettingId";
import {SettingOption} from "@/ig-template/features/settings/SettingOption";
import {Requirement} from "@/ig-template/tools/requirements/Requirement";

export class MultipleChoiceSetting<T> extends Setting<T> {

    constructor(id: SettingId, displayName: string, options: SettingOption<T>[], defaultValue: T, requirement?: Requirement) {
        super(id, displayName, options, defaultValue, requirement);

        if (!this.validValue(this.defaultValue)) {
            throw new RangeError(`${this.defaultValue} is not a valid value for setting ${this.id}.`);
        }
    }
}
