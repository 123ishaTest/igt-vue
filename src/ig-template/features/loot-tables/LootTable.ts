import {LootTableId} from "@/ig-template/features/loot-tables/LootTableId";
import {AbstractLootEntry} from "@/ig-template/features/loot-tables/entries/AbstractLootEntry";
import {Random} from "@/ig-template/tools/probability/Random";
import {AbstractLoot} from "@/ig-template/features/loot-tables/rewards/AbstractLoot";

export class LootTable {
    id: LootTableId;

    /**
     * All loot that is added on every roll
     */
    public always: AbstractLootEntry[];

    /**
     * Only one of these will be selected based on their relative weight, n times
     */
    public oneOf: AbstractLootEntry[];

    /**
     * Any of these have an independent chance to be added to the roll.
     */
    public anyOf: AbstractLootEntry[];

    constructor(id: LootTableId, always: AbstractLootEntry[], oneOf: AbstractLootEntry[], anyOf: AbstractLootEntry[]) {
        this.id = id;
        this.always = always;
        this.oneOf = oneOf;
        this.anyOf = anyOf
    }

    public roll(n: number = 1): AbstractLoot[] {
        const loot = this.getLoot(n);
        loot.forEach(l => {
            l.apply();
        })
        return loot;
    }

    public getLoot(n: number = 1): AbstractLoot[] {
        const always = this.calculateAlwaysLoot();
        const oneof = this.calculateOneOfLoot(n);
        const anyOf = this.calculateAnyOfLoot();

        const total = always.concat(oneof).concat(anyOf);

        return this.simplifyLoot(total);
    }

    public calculateAlwaysLoot(): AbstractLoot[] {
        let alwaysLoot: AbstractLoot[] = [];
        const availableLoot = LootTable.filterOnRequirements(this.always);
        for (const reward of availableLoot) {
            alwaysLoot = alwaysLoot.concat(reward.getLoot());
        }

        return alwaysLoot;
    }

    public calculateOneOfLoot(n: number): AbstractLoot[] {
        const availableLoot = LootTable.filterOnRequirements(this.oneOf);
        let res: AbstractLoot[] = [];
        for (let i = 0; i < n; i++) {
            res = res.concat(this.getOneFrom(availableLoot))
        }
        return res;
    }

    public getOneFrom(availableLoot: AbstractLootEntry[]): AbstractLoot[] {
        const sum = LootTable.calculateWeightSum(availableLoot);
        let draw = Random.floatBetween(0, sum)
        for (let i = 0; i < availableLoot.length; i++) {
            if (draw <= availableLoot[i].weight) {
                return availableLoot[i].getLoot();
            } else {
                draw -= availableLoot[i].weight;
            }
        }
        return [];
    }

    /**
     * Remove all entries that do not have their requirements met;
     * @param loot
     */
    public static filterOnRequirements(loot: AbstractLootEntry[]): AbstractLootEntry[] {
        return loot.filter(l => l.canGet());
    }

    public static calculateWeightSum(rewards: AbstractLootEntry[]) {
        let sum = 0;
        for (const key of rewards) {
            sum += key.weight;
        }
        return sum;
    }

    public calculateAnyOfLoot(): AbstractLoot[] {
        let anyOfLoot: AbstractLoot[] = [];
        const availableLoot = LootTable.filterOnRequirements(this.anyOf);

        for (const reward of availableLoot) {
            if (Random.booleanWithProbability(reward.weight)) {
                anyOfLoot = anyOfLoot.concat(reward.getLoot())
            }
        }
        return anyOfLoot;
    }

    /**
     * Merge duplicate ItemAmount together
     */
    public simplifyLoot(loots: AbstractLoot[]): AbstractLoot[] {
        const ret: AbstractLoot[] = [];
        for (const key in loots) {
            const loot = loots[key];
            const index = ret.findIndex(l => l.equals(loot));
            if (index !== -1) {
                ret[index].amount += loot.amount;
            } else {
                ret.push(loot);
            }
        }
        return ret;
    }


}
