import {MultipleChoiceSetting} from "@/ig-template/features/settings/MultipleChoiceSetting";
import {SettingId} from "@/ig-template/features/settings/SettingId";
import {SettingOption} from "@/ig-template/features/settings/SettingOption";
import {CustomRequirement} from "@/ig-template/tools/requirements/CustomRequirement";


describe('Multiple Choice Setting', () => {
    const id = 'example-setting' as SettingId

    test('valid default setting', () => {
        // Arrange
        const setting = new MultipleChoiceSetting(id, "Example setting", [
            new SettingOption("Option 1", 2),
        ], 2)

        // Assert
        expect(setting.defaultValue).toBe(2);
    });

    test('invalid default setting', () => {
        expect(() => {
            new MultipleChoiceSetting(id, "Example setting", [
                new SettingOption("Option 1", 2),
            ], 2123123)

        }).toThrow();

    });

    test('set setting', () => {
        // Arrange
        const setting = new MultipleChoiceSetting(id, "Example setting", [
            new SettingOption("Option 1", 1),
            new SettingOption("Option 2", 2),
        ], 1)

        // Act
        setting.set(2);

        // Assert
        expect(setting.value).toBe(2);
        expect(setting.isSelected(2)).toBeTruthy();
    });

    test('set invalid value', () => {
        // Arrange
        const setting = new MultipleChoiceSetting(id, "Example setting", [
            new SettingOption("Option 1", 1),
            new SettingOption("Option 2", 2),
        ], 1)

        // Act
        setting.set(3);

        // Assert
        expect(setting.value).toBe(1);
    });

    test('set locked setting not allowed', () => {
        // Arrange
        const setting = new MultipleChoiceSetting(id, "Example setting", [
            new SettingOption("Option 1", 1),
            new SettingOption("Option 2", 2),
        ], 1, new CustomRequirement("Always false", () => 0, () => 1))

        // Act
        setting.set(2);

        // Assert
        expect(setting.value).toBe(1);
    });

    test('set locked option not allowed', () => {
        // Arrange
        const setting = new MultipleChoiceSetting(id, "Example setting", [
            new SettingOption("Option 1", 1),
            new SettingOption("Option 2", 2, new CustomRequirement("Always false", () => 0, () => 1)),
        ], 1)

        // Act
        setting.set(2);

        // Assert
        expect(setting.value).toBe(1);
    });

});
