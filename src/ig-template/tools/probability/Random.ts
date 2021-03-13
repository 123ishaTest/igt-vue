export class Random {
    /**
     * Return a random integer between min (inclusive) and max (exclusive)
     * @param min inclusive
     * @param max exclusive
     */
    static intBetween(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    /**
     * Return a boolean with probability [0, 1] to be true.
     * Returns false if the probability is not in this range. Can be ignored with the second argument requireNormalizedProbability.
     */
    static booleanWithProbability(probability: number, requireNormalizedProbability: boolean = true): boolean {
        if (requireNormalizedProbability && (probability < 0 || probability > 1)) {
            console.warn(`Trying to generate a boolean with probability ${probability} outside of [0,1].
            Run this method with requireNormalizedProbability=false if you're okay with this.`);
            return false;
        }
        return Math.random() < probability;
    }

    /**
     * Return a boolean with a 1 in chance to be true.
     * booleanWithChance(300) for example
     * @param chance
     */
    static booleanWithOneInChance(chance: number): boolean {
        return this.intBetween(0, chance) == 0;
    }

    /**
     * Return a random float between min (inclusive) and max (exclusive)
     * @param min inclusive
     * @param max exclusive
     */
    static floatBetween(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    /**
     * Return a random index from the array
     */
    static arrayIndex<T>(array: T[]): number {
        return this.intBetween(0, array.length);
    }

    /**
     * Get a random entry from the array
     */
    static fromArray<T>(array: T[]): T {
        return array[this.arrayIndex(array)];
    }

    /**
     * Shuffle an array using fisher-yates
     * @param array
     */
    static shuffle<T>(array: T[]): T[] {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}
