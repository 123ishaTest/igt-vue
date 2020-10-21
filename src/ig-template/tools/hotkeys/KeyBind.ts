import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {KeyEventType} from "@/ig-template/tools/hotkeys/KeyEventType";

export class KeyBind {
    keys: string | string[]
    callback: Function;
    requirement: Requirement;
    eventType: KeyEventType;

    constructor(keys: string | string[], callback: Function, requirement: Requirement, eventType: KeyEventType = KeyEventType.KeyDown) {
        this.keys = keys;
        this.callback = callback;
        this.requirement = requirement;
        this.eventType = eventType;
    }
}
