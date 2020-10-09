import {Setting} from "./Setting";
import {OptionValue} from "./OptionValueType";
import {BooleanSetting} from "./BooleanSetting";
import {SettingsSaveData} from "./SettingsSaveData";
import {Feature} from "@/game/Feature";

export class Settings extends Feature {

    name = "Settings"

    list: Setting[] = [];

    initialize(): void {
        this.add(new BooleanSetting('money-display', 'Display money differently', true));
    }

    public add(setting: Setting): void {
        if (!this.getSetting(setting.name)) {
            this.list.push(setting);
        }
    }


    public setSettingByName(name: string, value: OptionValue): void {
        const setting = this.getSetting(name);
        if (setting) {
            setting.set(value);
        } else {
            console.warn(`Setting ${name} does not exist`);
        }

    }



    public getSetting(name: string): Setting | null {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].name == name) {
                return this.list[i];
            }
        }
        return null;
    }

    // Save logic
    saveKey = "settings";

    load(data: SettingsSaveData): void {
        for (const key in data.list) {
            if (Object.prototype.hasOwnProperty.call(data.list, key)) {
                this.setSettingByName(key, data.list[key])
            }
        }
    }

    parseSaveData(json: Record<string, unknown>): SettingsSaveData {
        const data = new SettingsSaveData();
        const list = json.list as Record<string, OptionValue>;
        for (const key in list) {
            if (Object.prototype.hasOwnProperty.call(list, key)) {
                data.addSetting(key, list[key])
            }
        }
        return data;
    }

    save(): SettingsSaveData {
        const data = new SettingsSaveData();
        for (const setting of this.list) {
            data.addSetting(setting.name, setting.value);
        }
        return data;
    }


}


