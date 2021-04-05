import {AbstractLootEntry} from "@/ig-template/features/loot-tables/entries/AbstractLootEntry";
import {InventoryItemLoot} from "@/ig-template/features/loot-tables/rewards/InventoryItemLoot";
import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";
import {AbstractItem} from "@/ig-template/features/items/AbstractItem";
import {IntRange} from "@/ig-template/tools/probability/IntRange";
import {Inventory} from "@/ig-template/features/inventory/Inventory";

export class InventoryItemEntry extends AbstractLootEntry {
    _inventory: Inventory;
    item: AbstractItem;

    constructor(item: AbstractItem, inventory: Inventory, weight: number = 1, amount: IntRange = new IntRange(1, 1), requirement: Requirement = new NoRequirement()) {
        super(weight, amount, requirement);
        this.item = item;
        this._inventory = inventory;
    }

    getLoot(): InventoryItemLoot[] {
        if (!this.canGet()) {
            console.warn(`Tried to get loot ${this.item}, but the requirements were not met`);
            return [];
        }
        return [new InventoryItemLoot(this.item, this.amount.getRandomBetween(), this._inventory)];
    }

}
