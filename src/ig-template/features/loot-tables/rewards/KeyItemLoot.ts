import {AbstractLoot} from "@/ig-template/features/loot-tables/rewards/AbstractLoot";
import {KeyItems} from "@/ig-template/features/key-items/KeyItems";
import {KeyItem} from "@/ig-template/features/key-items/KeyItem";

export class KeyItemLoot extends AbstractLoot {
    loot: KeyItem;
    _keyItems: KeyItems;


    constructor(loot: KeyItem, keyItems: KeyItems) {
        super(1);
        this.loot = loot;
        this._keyItems = keyItems;
    }

    apply(): void {
        this._keyItems.gainKeyItem(this.loot.id);
    }

    equals(other: AbstractLoot): boolean {
        return other instanceof KeyItemLoot && other.loot.id === this.loot.id;
    }

}
