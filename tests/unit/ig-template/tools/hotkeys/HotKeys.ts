import {HotKeys} from "@/ig-template/tools/hotkeys/HotKeys";
import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";
import {KeyBind} from "@/ig-template/tools/hotkeys/KeyBind";
import {KeyBindDescription} from "@/ig-template/tools/hotkeys/KeyBindDescription";

describe('HotKeys', () => {
    beforeEach(() => {
        HotKeys.reset();
    });

    const keys = "ctrl+s";

    test('add and remove keybind', () => {
        // Arrange
        expect.assertions(2);

        const keyBind = new KeyBind(keys,
            "For test purposes", () => {
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


    test('keybind descriptions', () => {
        // Arrange
        const firstKeys = "ctrl+e";
        const firstDescription = "First keybind";

        const secondKeys = ["ctrl+a", "command+a"];
        const secondDescription = "Second keybind";

        const keyBind1 = new KeyBind(firstKeys,
            firstDescription, () => {
                // Empty
            }, new NoRequirement())

        const keyBind2 = new KeyBind(secondKeys,
            secondDescription, () => {
                // Empty
            }, new NoRequirement())

        const expectedDescriptions: KeyBindDescription[] = [
            {
                keys: firstKeys,
                description: firstDescription,
            },
            {
                keys: secondKeys.join(", "),
                description: secondDescription,
            }
        ]

        // Act
        HotKeys.addKeyBind(keyBind1);
        HotKeys.addKeyBind(keyBind2);
        const actualDescriptions = HotKeys.getKeyBindDescriptions();

        // Assert
        expect(actualDescriptions).toEqual(expectedDescriptions)

    });

});
