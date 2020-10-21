import Mousetrap from 'mousetrap';
import {KeyBind} from "@/ig-template/tools/hotkeys/KeyBind";
import {KeyEventType} from "@/ig-template/tools/hotkeys/KeyEventType";
import {KeyBindDescription} from "@/ig-template/tools/hotkeys/KeyBindDescription";

export class HotKeys {
    private static _keyBinds: KeyBind[] = [];

    public static addKeyBind(keyBind: KeyBind) {
        Mousetrap.bind(keyBind.keys, () => {
            if (keyBind.requirement.isCompleted) {
                keyBind.callback();
            }
        }, keyBind.eventType)
        this._keyBinds.push(keyBind);
    }

    public static removeKeyBind(keys: string | string[], action = KeyEventType.KeyDown) {
        this._keyBinds.push()
        Mousetrap.unbind(keys, action);
    }

    public static trigger(keys: string, action = KeyEventType.KeyDown) {
        Mousetrap.trigger(keys, action);
    }

    public static getKeyBindDescriptions(): KeyBindDescription[] {
        return this._keyBinds.map(keyBind => {
            const keysText: string = (typeof keyBind.keys === 'string') ? keyBind.keys : keyBind.keys.join(", ");

            return {
                'keys': keysText,
                'description': keyBind.description
            };
        });
    }

    public static reset(): void {
        this._keyBinds = [];
        Mousetrap.reset();
    }
}
