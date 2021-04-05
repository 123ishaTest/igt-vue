import {AbstractLoot} from "@/ig-template/features/loot-tables/rewards/AbstractLoot";
import {Inventory} from "@/ig-template/features/inventory/Inventory";
import {AbstractItem} from "@/ig-template/features/items/AbstractItem";

export class InventoryItemLoot extends AbstractLoot {
    loot: AbstractItem;
    _inventory: Inventory;


    constructor(loot: AbstractItem, amount: number, inventory: Inventory) {
        super(amount);
        this.loot = loot;
        this._inventory = inventory;
    }

    apply(): void {
        this._inventory.gainItem(this.loot, this.amount);
    }

}
