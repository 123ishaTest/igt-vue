import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";

export class SettingOption<T> {
    displayText: string;
    value: T;

    requirement: Requirement;


    constructor(displayText: string, value: T, requirement: Requirement = new NoRequirement()) {
        this.displayText = displayText;
        this.value = value;
        this.requirement = requirement;
    }

    get canAccess() {
        return this.requirement.isCompleted;
    }
}
