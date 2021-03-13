import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";
import {SettingsValue} from "@/ig-template/features/settings/SettingsValueType";

export class SettingOption {
    displayText: string;
    value: SettingsValue;

    requirement: Requirement;


    constructor(displayText: string, value: SettingsValue, requirement: Requirement = new NoRequirement()) {
        this.displayText = displayText;
        this.value = value;
        this.requirement = requirement;
    }

    get canAccess() {
        return this.requirement.isCompleted;
    }
}
