import {HotKeys} from "@/ig-template/tools/hotkeys/HotKeys";
import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";
import {KeyBind} from "@/ig-template/tools/hotkeys/KeyBind";
import {BooleanRequirement} from "@/ig-template/tools/requirements/BooleanRequirement";

describe('Keybind', () => {
    const keys = "ctrl+s";

    test('requirement completed triggers callback', () => {
        // Arrange
        expect.assertions(1);

        const keyBind = new KeyBind(keys,
            () => {
                // Assert
                expect(true).toBeTruthy();
            }, new NoRequirement())


        // Act
        HotKeys.addKeyBind(keyBind);
        HotKeys.trigger(keys);
    });

    test('requirement not completed does not trigger callback', () => {
        // Arrange
        expect.assertions(0);

        const keyBind = new KeyBind(keys,
            () => {
                // Assert
                expect(true).toBeTruthy();
            }, new BooleanRequirement("Always false", () => false))

        // Act
        HotKeys.addKeyBind(keyBind);
        HotKeys.trigger(keys);
    });

});
