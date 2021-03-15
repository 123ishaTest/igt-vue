import {Settings} from "@/ig-template/features/settings/Settings";
import {MultipleChoiceSetting} from "@/ig-template/features/settings/MultipleChoiceSetting";
import {SettingId} from "@/ig-template/features/settings/SettingId";
import {SettingOption} from "@/ig-template/features/settings/SettingOption";
import {BooleanSetting} from "@/ig-template/features/settings/BooleanSetting";
import {SettingsSaveData} from "@/ig-template/features/settings/SettingsSaveData";


describe('Settings', () => {
    const id = 'example-setting' as SettingId
    let settings: Settings;

    beforeEach(() => {
        settings = new Settings();
        settings.registerSetting(
            new MultipleChoiceSetting(id, "Example setting", [
                new SettingOption("Option 1", 1),
                new SettingOption("Option 2", 2),
                new SettingOption("Option 3", 3),
            ], 2)
        )
    });

    test('adding same setting multiple times', () => {
        // Arrange
        settings.registerSetting(new BooleanSetting(id, "Duplicate", false));

        // Assert
        expect(settings.list.length).toBe(1);
    });

    test('get valid setting', () => {
        // Act
        const setting = settings.getSetting(id);

        // Assert
        expect(setting).toBeDefined();
        expect(setting?.value).toBe(2);
    });

    test('get invalid setting', () => {
        // Act
        const setting = settings.getSetting("undefined setting" as SettingId);

        // Assert
        expect(setting).toBeNull();
    });

    test('set valid setting', () => {
        // Act
        settings.setSetting(id, 1);
        const setting = settings.getSetting(id);

        // Assert
        expect(setting).toBeDefined();
        expect(setting?.value).toBe(1);
    });

    test('set invalid setting', () => {
        expect(() => {
            settings.setSetting("undefined setting" as SettingId, 1);
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
                "id": id,
                "value": 1,
            }]
        };

        // Act
        settings.setSetting(id, 1);
        const actualSaveData = settings.save();

        // Assert
        expect(actualSaveData).toEqual(expectedSaveData);
    });

    test('load', () => {
        // Arrange
        const saveData: SettingsSaveData = {
            list: [{
                id: id,
                value: 1,
            }]
        };
        settings.setSetting(id, 2);

        // Act
        settings.load(saveData);


        // Assert
        expect(settings.getSetting(id)?.value).toBe(1);
    });

});
