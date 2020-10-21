import Mousetrap from 'mousetrap';
import {KeyBind} from "@/ig-template/tools/hotkeys/KeyBind";
import {KeyEventType} from "@/ig-template/tools/hotkeys/KeyEventType";

export class HotKeys {

    public static addKeyBind(keyBind: KeyBind) {
        Mousetrap.bind(keyBind.keys, () => {
            if (keyBind.requirement.isCompleted) {
                keyBind.callback();
            }
        }, keyBind.eventType)
    }

    public static removeKeyBind(keys: string | string[], action = KeyEventType.KeyDown) {
        Mousetrap.unbind(keys, action);
    }

    public static trigger(keys: string, action = KeyEventType.KeyDown) {
        Mousetrap.trigger(keys, action);
    }
}
