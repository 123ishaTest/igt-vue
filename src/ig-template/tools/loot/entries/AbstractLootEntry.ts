import {IntRange} from "@/ig-template/tools/probability/IntRange";
import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";
import {AbstractLoot} from "@/ig-template/tools/loot/rewards/AbstractLoot";

export abstract class AbstractLootEntry {
    public weight: number;
    public amount: IntRange;
    public requirement: Requirement;


    protected constructor(weight: number = 1, amount: IntRange = new IntRange(1, 1), requirement: Requirement = new NoRequirement()) {
        this.weight = weight;
        this.amount = amount;
        this.requirement = requirement;
    }

    public canGet(): boolean {
        return this.requirement.isCompleted
    }

    public abstract getLoot():  AbstractLoot[];
}
