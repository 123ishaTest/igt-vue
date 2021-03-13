import {Setting} from "@/ig-template/features/settings/Setting";
import {SettingId} from "@/ig-template/features/settings/SettingId";
import {SettingOption} from "@/ig-template/features/settings/SettingOption";
import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {SettingsValue} from "@/ig-template/features/settings/SettingsValueType";

export class MultipleChoiceSetting extends Setting {

    constructor(id: SettingId, displayName: string, options: SettingOption[], defaultValue: SettingsValue, requirement?: Requirement) {
        super(id, displayName, options, defaultValue, requirement);

        if (!this.validValue(this.defaultValue)) {
            throw new RangeError(`${this.defaultValue} is not a valid value for setting ${this.id}.`);
        }
    }
}
