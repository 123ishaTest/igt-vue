import Mousetrap from 'mousetrap';
import {KeyBind} from "@/ig-template/tools/hotkeys/KeyBind";
import {KeyEventType} from "@/ig-template/tools/hotkeys/KeyEventType";
import {KeyBindDescription} from "@/ig-template/tools/hotkeys/KeyBindDescription";

/**
 * Easily add KeyBinds from anywhere in your codebase.
 * Very useful to easily switch tabs or claim resources!
 */
export class HotKeys {

    /**
     * List of all registered keybinds
     * @private
     */
    private static _keyBinds: KeyBind[] = [];

    /**
     * Register a keybind with mousetrap, but add the requirement in the callback.
     */
    public static addKeyBind(keyBind: KeyBind) {
        Mousetrap.bind(keyBind.keys, () => {
            if (keyBind.requirement.isCompleted) {
                keyBind.callback();
            }
        }, keyBind.eventType)
        this._keyBinds.push(keyBind);
    }

    /**
     * Unregister a keybind from mousetrap.
     */
    public static removeKeyBind(keys: string | string[], action = KeyEventType.KeyDown) {
        this._keyBinds = this._keyBinds.filter((keyBind) => keyBind.keys !== keys);
        Mousetrap.unbind(keys, action);
    }

    /**
     * Manyally trigger a callback. Note that the requirement still needs to be completed for it to run.
     */
    public static trigger(keys: string, action = KeyEventType.KeyDown) {
        Mousetrap.trigger(keys, action);
    }

    /**
     * Generate a list of all descriptions to show in the UI.
     */
    public static getKeyBindDescriptions(): KeyBindDescription[] {
        return this._keyBinds.map(keyBind => {
            const keysText: string = (typeof keyBind.keys === 'string') ? keyBind.keys : keyBind.keys.join(", ");

            return {
                'keys': keysText,
                'description': keyBind.description
            };
        });
    }

    /**
     * Remove all registered keybinds.
     */
    public static reset(): void {
        this._keyBinds = [];
        Mousetrap.reset();
    }
}
