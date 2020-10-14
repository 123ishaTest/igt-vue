import {Setting} from "@/ig-template/features/settings/Setting";
import {SettingId} from "./SettingId";
import {SettingOption} from "./SettingOption";
import {Requirement} from "../../tools/requirements/Requirement";

export class MultipleChoiceSetting<T> extends Setting<T> {

    constructor(id: SettingId, displayName: string, options: SettingOption<T>[], defaultValue: T, requirement?: Requirement) {
        super(id, displayName, options, defaultValue, requirement);
    }
}
