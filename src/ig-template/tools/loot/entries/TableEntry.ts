import {LootTableId} from "@/ig-template/tools/loot/LootTableId";
import {LootTables} from "@/ig-template/features/loot-tables/LootTables";
import {AbstractLootEntry} from "@/ig-template/tools/loot/entries/AbstractLootEntry";
import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";
import {IntRange} from "@/ig-template/tools/probability/IntRange";
import {AbstractLoot} from "@/ig-template/tools/loot/rewards/AbstractLoot";

export class TableEntry extends AbstractLootEntry {
    _lootTables: LootTables;
    table: LootTableId;

    constructor(table: LootTableId, lootTables: LootTables, weight: number = 1, amount: IntRange = new IntRange(1, 1), requirement: Requirement = new NoRequirement()) {
        super(weight, amount, requirement);
        this.table = table;
        this._lootTables = lootTables;
    }

    getLoot(): AbstractLoot[] {
        return this._lootTables[this.table].getLoot();
    }

}
