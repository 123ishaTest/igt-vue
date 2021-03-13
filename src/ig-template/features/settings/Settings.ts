import {Feature} from "@/ig-template/features/Feature";
import {SettingsSaveData} from "@/ig-template/features/settings/SettingsSaveData";
import {Setting} from "@/ig-template/features/settings/Setting";
import {SettingId} from "@/ig-template/features/settings/SettingId";
import {MultipleChoiceSetting} from "@/ig-template/features/settings/MultipleChoiceSetting";
import {SettingOption} from "@/ig-template/features/settings/SettingOption";
import {AbstractField} from "@/ig-template/developer-panel/fields/AbstractField";
import {FunctionField} from "@/ig-template/developer-panel/fields/FunctionField";
import {BooleanSetting} from "@/ig-template/features/settings/BooleanSetting";
import {SettingsValue} from "@/ig-template/features/settings/SettingsValueType";

export class Settings extends Feature {
    list: Setting[];

    exampleBooleanSetting: BooleanSetting;

    constructor() {
        super("settings");
        this.list = [];

        // Empty, will be overwritten in initialize()
        this.exampleBooleanSetting = {} as BooleanSetting;
    }

    registerSetting<T extends Setting>(setting: T): T {
        if (!this.getSetting(setting.id)) {
            this.list.push(setting);
        }
        return setting;
    }

    initialize() {
        this.exampleBooleanSetting = this.registerSetting(new BooleanSetting(SettingId.ExampleBooleanSetting, "Example", true));

        this.registerSetting(
            new MultipleChoiceSetting(SettingId.ExampleSetting, "Example setting", [
                new SettingOption("Option 1", 1),
                new SettingOption("Option 2", 2),
                new SettingOption("Option 3", 3),
            ], 2)
        )
    }

    setSetting(id: SettingId, value: SettingsValue) {
        const setting = this.getSetting(id);
        if (setting) {
            setting.set(value);
        } else {
            console.warn(`Setting ${id} does not exist`);
        }

    }

    getSetting<T extends Setting>(id: SettingId): T | null {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id == id) {
                return this.list[i] as T;
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
