import {AbstractLoot} from "@/ig-template/features/loot-tables/rewards/AbstractLoot";
import {KeyItems} from "@/ig-template/features/key-items/KeyItems";
import {KeyItemId} from "@/ig-template/features/key-items/KeyItemId";

export class KeyItemLoot extends AbstractLoot {
    loot: KeyItemId;
    _keyItems: KeyItems;


    constructor(loot: KeyItemId, keyItems: KeyItems) {
        super(1);
        this.loot = loot;
        this._keyItems = keyItems;
    }

    apply(): void {
        this._keyItems.gainKeyItem(this.loot);
    }

    equals(other: AbstractLoot): boolean {
        return other instanceof KeyItemLoot && other.loot === this.loot;
    }

}
