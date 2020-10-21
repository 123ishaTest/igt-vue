import {HotKeys} from "@/ig-template/tools/hotkeys/HotKeys";
import {CustomConditionKeyBind} from "@/ig-template/tools/hotkeys/CustomConditionKeyBind";

describe('Custom Condition Key Bind', () => {
    const keys = "ctrl+s";

    test('condition true triggers callback', () => {
        // Arrange
        expect.assertions(1);

        const keyBind = new CustomConditionKeyBind(keys,
            "For test purposes", () => {
                // Assert
                expect(true).toBeTruthy();
            }, () => {
                return true
            })


        // Act
        HotKeys.addKeyBind(keyBind);
        HotKeys.trigger(keys);
    });

    test('condition false does not trigger callback', () => {
        // Arrange
        expect.assertions(0);

        const keyBind = new CustomConditionKeyBind(keys,
            "For test purposes", () => {
                // Assert
                expect(true).toBeTruthy();
            }, () => {
                return false
            })


        // Act
        HotKeys.addKeyBind(keyBind);
        HotKeys.trigger(keys);
    });

});
