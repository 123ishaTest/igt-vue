import {AbstractLootEntry} from "@/ig-template/tools/loot/entries/AbstractLootEntry";
import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";
import {IntRange} from "@/ig-template/tools/probability/IntRange";
import {KeyItems} from "@/ig-template/features/key-items/KeyItems";
import {KeyItemLoot} from "@/ig-template/tools/loot/rewards/KeyItemLoot";
import {KeyItem} from "@/ig-template/features/key-items/KeyItem";

export class KeyItemEntry extends AbstractLootEntry {
    _keyItems: KeyItems;
    item: KeyItem;

    constructor(item: KeyItem, KeyItems: KeyItems, weight: number = 1, requirement: Requirement = new NoRequirement()) {
        super(weight, new IntRange(1, 1), requirement);
        this.item = item;
        this._keyItems = KeyItems;
    }

    getLoot(): KeyItemLoot[] {
        if (!this.canGet() || this._keyItems.hasKeyItem(this.item.id)) {
            return [];
        }
        return [new KeyItemLoot(this.item, this._keyItems)];
    }

}
