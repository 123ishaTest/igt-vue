import {KeyBind} from "@/ig-template/tools/hotkeys/KeyBind";
import {BooleanRequirement} from "@/ig-template/tools/requirements/BooleanRequirement";


/**
 * A KeyBind helper class that allows you to pass any arbitrary condition you might have. Your condition should return a boolean.
 */
export class CustomConditionKeyBind extends KeyBind {

    constructor(keys: string | string[], callback: Function, condition: Function) {
        super(keys, callback, new BooleanRequirement("", condition));
    }
}
