import {Feature} from "@/ig-template/features/Feature";
import {SaveData} from "@/ig-template/tools/saving/SaveData";
import {LootTable} from "@/ig-template/features/loot-tables/LootTable";
import {LootTableId} from "@/ig-template/features/loot-tables/LootTableId";
import {InventoryItemEntry} from "@/ig-template/features/loot-tables/entries/InventoryItemEntry";
import {Features} from "@/ig-template/Features";
import {ItemId} from "@/ig-template/features/items/ItemId";
import {KeyItemEntry} from "@/ig-template/features/loot-tables/entries/KeyItemEntry";
import {KeyItemId} from "@/ig-template/features/key-items/KeyItemId";
import {TableEntry} from "@/ig-template/features/loot-tables/entries/TableEntry";
import {IntRange} from "@/ig-template/tools/probability/IntRange";
import {CurrencyEntry} from "@/ig-template/features/loot-tables/entries/CurrencyEntry";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";

export class LootTables extends Feature {
    _features: Features = undefined as unknown as Features;

    constructor() {
        super('loot-tables');
    }


    initialize(features: Features) {
        super.initialize(features);
        this._features = features;
    }

    get example() {
        return new LootTable(LootTableId.Example, [
            new CurrencyEntry(new IntRange(100, 200), CurrencyType.Money, this._features.wallet)
        ], [
            new InventoryItemEntry(this._features.itemList[ItemId.RawFish], this._features.inventory),
            new InventoryItemEntry(this._features.itemList[ItemId.CookedFish], this._features.inventory),

        ], [
            new KeyItemEntry(KeyItemId.Item1, this._features.keyItems, 0.5),
            new TableEntry(LootTableId.Example, this, 0.05),
            new InventoryItemEntry(this._features.itemList[ItemId.MoneyPouch], this._features.inventory, 1, new IntRange(3, 5)),
        ])
    }

    load(): void {
        // Empty
    }

    save(): SaveData {
        return {};
    }

}
