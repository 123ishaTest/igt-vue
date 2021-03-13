import {Setting} from "@/ig-template/features/settings/Setting";
import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {SettingId} from "@/ig-template/features/settings/SettingId";
import {SettingOption} from "@/ig-template/features/settings/SettingOption";

/**
 * A setting which allows any floating point value between min and max (both inclusive).
 */
export class RangeSetting extends Setting {
    min: number;
    max: number;

    constructor(id: SettingId, displayName: string, min: number, max: number, defaultValue: number, requirement?: Requirement) {
        // Pass the default value as an option
        super(id, displayName, [new SettingOption("Default", defaultValue)], defaultValue, requirement);

        if (min >= max || max <= min) {
            throw new RangeError(`Invalid range settings (min: ${min}, max: ${max}) for setting ${this.id}`)
        }
        this.min = min;
        this.max = max;

        if (!this.validValue(defaultValue)) {
            throw new RangeError(`${this.defaultValue} is not a valid value for setting ${this.id}.`);
        }
    }

    validValue(value: number): boolean {
        return value >= this.min && value <= this.max;
    }
}
