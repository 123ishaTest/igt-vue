import {Setting} from "@/ig-template/features/settings/Setting";
import {SettingId} from "@/ig-template/features/settings/SettingId";
import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {SettingOption} from "@/ig-template/features/settings/SettingOption";

/**
 * A setting that can only be on or off.
 * The options can't have requirements but this can be solved by using the correct defaultValue and requirement.
 */
export class BooleanSetting extends Setting {

    constructor(id: SettingId, displayName: string, defaultValue: boolean, requirement?: Requirement) {
        super(id, displayName, [
            new SettingOption("On", true),
            new SettingOption("Off", false)
        ], defaultValue, requirement);
    }

    public toggle(): void {
        this.value = !this.value;
    }
}