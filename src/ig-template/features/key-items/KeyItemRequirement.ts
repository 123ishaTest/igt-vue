import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {KeyItems} from "@/ig-template/features/key-items/KeyItems";
import {KeyItemId} from "@/ig-template/features/key-items/KeyItemId";

export class KeyItemRequirement extends Requirement {
    _keyItems: KeyItems;
    itemId: KeyItemId;

    constructor(keyItems: KeyItems, itemId: KeyItemId) {
        super();
        this._keyItems = keyItems;
        this.itemId = itemId;
    }

    get actualValue(): number {
        return this._keyItems.hasKeyItem(this.itemId) ? 1 : 0;
    }

    get hint(): string {
        return `Unlock the ${this._keyItems.getKeyItem(this.itemId).name}`;
    }

    get targetValue(): number {
        return 1;
    }


}
