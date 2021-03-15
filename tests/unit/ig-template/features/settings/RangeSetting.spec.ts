import {SettingId} from "@/ig-template/features/settings/SettingId";
import {RangeSetting} from "@/ig-template/features/settings/RangeSetting";
import {CustomRequirement} from "@/ig-template/tools/requirements/CustomRequirement";


describe('Range Setting', () => {
    const id = 'example-setting' as SettingId

    test('valid default setting', () => {
        // Arrange
        const setting = new RangeSetting(id, "Example setting", 1, 3, 2);

        // Assert
        expect(setting.defaultValue).toBe(2);
    });

    test('set valid option on locked setting', () => {
        // Arrange
        const setting = new RangeSetting(id, "Example setting", 1, 3, 2,
            new CustomRequirement("Always false", () => 0, () => 1));

        // Act
        setting.set(1);

        // Assert
        expect(setting.defaultValue).toBe(2);
    });

    /**
     * While there is technically nothing wrong with this, it throws an error because it is not intended.
     */
    test('min === max', () => {
        // Arrange
        expect(() => {
            new RangeSetting(id, "Example setting", 1, 1, 1);

        }).toThrow(RangeError)
    });

    test('min > max', () => {
        // Arrange
        expect(() => {
            new RangeSetting(id, "Example setting", 3, 1, 2);
        }).toThrow(RangeError)
    });

    test('default outside of range', () => {
        // Arrange
        expect(() => {
            new RangeSetting(id, "Example setting", 1, 3, 10);
        }).toThrow(RangeError)
    });
});
