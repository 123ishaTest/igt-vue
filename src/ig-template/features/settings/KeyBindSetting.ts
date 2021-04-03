import {Setting} from "@/ig-template/features/settings/Setting";
import {SettingId} from "@/ig-template/features/settings/SettingId";
import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {SettingsValue} from "@/ig-template/features/settings/SettingsValueType";
import { HotKeys } from "@/ig-template/tools/hotkeys/HotKeys";
import { KeyBind } from "@/ig-template/tools/hotkeys/KeyBind";

/**
 * A setting that can only be on or off.
 * The options can't have requirements but this can be solved by using the correct defaultValue and requirement.
 */
export class KeyBindSetting extends Setting {

    public keybind: KeyBind;

    constructor(id: SettingId, displayName: string, keybind: KeyBind, requirement?: Requirement) {
        super(id, displayName, [], keybind.keys.toString(), requirement, 
            (previousValue: SettingsValue, value: SettingsValue) => {
                previousValue = previousValue.toString();
                HotKeys.removeKeyBind(previousValue);
                const newKeyBind = new KeyBind(value.toString(), this.keybind.description, this.keybind.callback, this.keybind.requirement, this.keybind.eventType);
                HotKeys.addKeyBind(newKeyBind);
                this.keybind = newKeyBind;
            }
        );
        this.keybind = keybind;
        HotKeys.addKeyBind(this.keybind);
    }

    validValue(value: SettingsValue): boolean {
        // TODO: Check if the given keybind is valid
        if (!value) {
            return false;
        }
        return true;
    }

    static parseEvent(event: KeyboardEvent): string {
        // TODO: Create better logic for this, and also exclude invalid keys
        const value = [];
        if (event.ctrlKey) {
            value.push('ctrl');
        }
        if (event.shiftKey) {
            value.push('shift');
        }
        if (event.altKey) {
            value.push('alt');
        }
        value.push(event.key);
        return value.join('+');
    }

}