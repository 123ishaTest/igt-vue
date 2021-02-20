import {Outcome} from "@/ig-template/tools/probability/Outcome";
import {Random} from "@/ig-template/tools/probability/Random";

export class WeightedDistribution<T> {
    outcomes: Outcome<T>[];

    constructor(outcomes: Outcome<T>[] = []) {
        this.outcomes = outcomes;
    }

    public outcomesWithMetRequirements(): Outcome<T>[] {
        return this.outcomes.filter(o => o.canGet());
    }

    draw(): T {
        if (this.outcomesWithMetRequirements().length === 0) {
            throw new Error("Cannot draw from empty distribution");
        }
        const totalWeight = this.getTotalWeight();
        const random = Random.floatBetween(0, totalWeight);

        let weight: number = 0;
        for (const outcome of this.outcomesWithMetRequirements()) {
            weight += outcome.weight;
            if (random <= weight) {
                return outcome.item;
            }
        }
        console.error(`Could not draw an item for random ${random}. This should never happen`);
        return Random.fromArray(this.outcomesWithMetRequirements()).item;
    }

    /**
     * Calculate the total weight of all outcomes
     */
    getTotalWeight(): number {
        let weight = 0;
        for (const outcome of this.outcomesWithMetRequirements()) {
            weight += outcome.weight;
        }
        return weight;
    }

    addOutcome(outcome: Outcome<T>) {
        this.outcomes.push(outcome);
    }

    removeOutcome(outcome: Outcome<T>) {
        const index = this.outcomes.indexOf(outcome);
        if (index !== -1) {
            this.outcomes.splice(index, 1);
        }
    }
}