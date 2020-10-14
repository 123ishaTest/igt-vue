import {SettingId} from "@/ig-template/features/settings/SettingId";
import {BooleanSetting} from "@/ig-template/features/settings/BooleanSetting";


describe('Boolean Setting', () => {

    test('valid default setting', () => {
        // Arrange
        const setting = new BooleanSetting(SettingId.ExampleSetting, "Example setting", false);

        // Assert
        expect(setting.defaultValue).toBe(false);
    });


});
