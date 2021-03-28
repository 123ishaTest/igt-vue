import {KeyItemId} from "@/ig-template/features/key-items/KeyItemId";

export class KeyItem {
    id: KeyItemId;
    name: string;
    description: string;
    unlockHint: string;
    isUnlocked: boolean = false;


    constructor(id: KeyItemId, name: string, description: string, unlockHint: string = "") {
        this.id = id;
        this.name = name;
        this.description = description;
        this.unlockHint = unlockHint;
    }

    unlock(): void {
        this.isUnlocked = true;
    }
}
