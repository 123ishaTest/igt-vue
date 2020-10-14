import {Settings} from "@/ig-template/features/settings/Settings";
import {MultipleChoiceSetting} from "@/ig-template/features/settings/MultipleChoiceSetting";
import {SettingId} from "@/ig-template/features/settings/SettingId";
import {SettingOption} from "@/ig-template/features/settings/SettingOption";
import {BooleanSetting} from "@/ig-template/features/settings/BooleanSetting";
import {SettingsSaveData} from "@/ig-template/features/settings/SettingsSaveData";


describe('Settings', () => {

    let settings: Settings;

    beforeEach(() => {
        settings = new Settings();
        settings.add(
            new MultipleChoiceSetting(SettingId.ExampleSetting, "Example setting", [
                new SettingOption<number>("Option 1", 1),
                new SettingOption<number>("Option 2", 2),
                new SettingOption<number>("Option 3", 3),
            ], 2)
        )
    });

    test('adding same setting multiple times', () => {
        // Arrange
        settings.add(new BooleanSetting(SettingId.ExampleSetting, "Duplicate", false));

        // Assert
        expect(settings.list.length).toBe(1);
    });

    test('get valid setting', () => {
        // Act
        const setting = settings.getSetting<number>(SettingId.ExampleSetting);

        // Assert
        expect(setting).toBeDefined();
        expect(setting?.value).toBe(2);
    });

    test('get invalid setting', () => {
        // Act
        const setting = settings.getSetting<number>("undefined setting" as SettingId);

        // Assert
        expect(setting).toBeNull();
    });

    test('set valid setting', () => {
        // Act
        settings.setSetting<number>(SettingId.ExampleSetting, 1);
        const setting = settings.getSetting<number>(SettingId.ExampleSetting);

        // Assert
        expect(setting).toBeDefined();
        expect(setting?.value).toBe(1);
    });

    test('set invalid setting', () => {
        expect(() => {
            settings.setSetting<number>("undefined setting" as SettingId, 1);
        }).not.toThrow()
    });

    test('save empty', () => {
        // Arrange
        const expectedSaveData: SettingsSaveData = {
            list: []
        };
        const settings = new Settings();

        // Act
        const actualSaveData = settings.save();

        // Assert
        expect(actualSaveData).toEqual(expectedSaveData);
    });


    test('save', () => {
        // Arrange
        const expectedSaveData: SettingsSaveData = {
            list: [{
                "id": SettingId.ExampleSetting,
                "value": 1,
            }]
        };

        // Act
        settings.setSetting(SettingId.ExampleSetting, 1);
        const actualSaveData = settings.save();

        // Assert
        expect(actualSaveData).toEqual(expectedSaveData);
    });

    test('load', () => {
        // Arrange
        const saveData: SettingsSaveData = {
            list: [{
                id: SettingId.ExampleSetting,
                value: 1,
            }]
        };
        settings.setSetting(SettingId.ExampleSetting, 2);

        // Act
        settings.load(saveData);


        // Assert
        expect(settings.getSetting(SettingId.ExampleSetting)?.value).toBe(1);
    });

});
