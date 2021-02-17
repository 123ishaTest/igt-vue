import {Feature} from "@/ig-template/features/Feature";
import {SettingsSaveData} from "@/ig-template/features/settings/SettingsSaveData";
import {Setting} from "@/ig-template/features/settings/Setting";
import {SettingId} from "@/ig-template/features/settings/SettingId";
import {MultipleChoiceSetting} from "@/ig-template/features/settings/MultipleChoiceSetting";
import {SettingOption} from "@/ig-template/features/settings/SettingOption";
import {Features} from "@/ig-template/Features";
import {AbstractField} from "@/ig-template/developer-panel/AbstractField";
import {FunctionField} from "@/ig-template/developer-panel/FunctionField";

export class Settings extends Feature {
    list: Setting<any>[];

    constructor() {
        super("settings");
        this.list = [];
    }

    add(setting: Setting<any>) {
        if (!this.getSetting(setting.id)) {
            this.list.push(setting);
        }
    }

    initialize(features: Features) {
        this.add(
            new MultipleChoiceSetting(SettingId.ExampleSetting, "Example setting", [
                new SettingOption<number>("Option 1", 1),
                new SettingOption<number>("Option 2", 2),
                new SettingOption<number>("Option 3", 3),
            ], 2)
        )
    }

    setSetting<T>(id: SettingId, value: T) {
        const setting = this.getSetting(id);
        if (setting) {
            setting.set(value);
        } else {
            console.warn(`Setting ${id} does not exist`);
        }

    }

    getSetting<T>(id: SettingId): Setting<T> | null {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id == id) {
                return this.list[i];
            }
        }
        console.warn(`Setting ${id} does not exist`);
        return null;
    }


    load(data: SettingsSaveData): void {
        for (const settingSave of data.list) {
            this.getSetting(settingSave.id)?.set(settingSave.value);
        }
    }

    save(): SettingsSaveData {

        return {
            list: this.list.map(setting => {
                return {
                    id: setting.id,
                    value: setting.value
                }
            })
        }

    }

    getDeveloperPanelFields(): AbstractField[] {
        return [
            new FunctionField(() => {
                alert('test')
            }, 'Test'),
        ]
    }

}
