import Mousetrap from 'mousetrap';
import {KeyBind} from "@/ig-template/tools/hotkeys/KeyBind";

export class HotKeys {

    public static addKeyBind(keyBind: KeyBind) {
        Mousetrap.bind(keyBind.keys, () => {
            if (keyBind.requirement.isCompleted) {
                keyBind.callback();
            }
        }, keyBind.eventType)
    }

    public static removeKeyBind(keys: string | string[]) {
        Mousetrap.unbind(keys);
    }
}
