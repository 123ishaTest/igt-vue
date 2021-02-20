import {Random} from "@/ig-template/tools/probability/Random";

export class IntRange {
    min: number;
    max: number;

    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }

    /**
     * Inclusive
     */
    getRandomBetween(): number {
        return Random.intBetween(this.min, this.max + 1);
    }
}
