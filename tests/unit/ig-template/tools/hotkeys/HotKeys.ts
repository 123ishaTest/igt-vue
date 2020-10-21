import {HotKeys} from "@/ig-template/tools/hotkeys/HotKeys";
import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";
import {KeyBind} from "@/ig-template/tools/hotkeys/KeyBind";

describe('HotKeys', () => {
    const keys = "ctrl+s";

    test('add and remove keybind', () => {
        // Arrange
        expect.assertions(2);

        const keyBind = new KeyBind(keys,
            () => {
                // Assert
                expect(true).toBeTruthy();
            }, new NoRequirement())

        // Act
        HotKeys.addKeyBind(keyBind);
        // First trigger
        HotKeys.trigger(keys);

        HotKeys.removeKeyBind(keys);
        // Doesn't work as it's removed
        HotKeys.trigger(keys);

        HotKeys.addKeyBind(keyBind);
        // Second trigger
        HotKeys.trigger(keys);

    });


});
