import {KeyItemId} from "@/ig-template/features/key-items/KeyItemId";

export class KeyItem {
    id: KeyItemId;
    name: string;
    description: string;
    unlockHint: string;
    image: string
    isUnlocked: boolean = false;


    constructor(id: KeyItemId, name: string, description: string, unlockHint: string = "", image: string = "") {
        this.id = id;
        this.name = name;
        this.description = description;
        this.unlockHint = unlockHint;
        this.image = image;
    }

    unlock(): void {
        this.isUnlocked = true;
    }
}
