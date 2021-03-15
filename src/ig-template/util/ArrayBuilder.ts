export class ArrayBuilder {
    /**
     * Creates an array with 'count' numbers, starting at 'start', increasing by 'step' each entry.
     */
    static fromStartAndStepAdditive(start: number, step: number, count: number): number[] {
        const res = [];
        for (let i = 0; i < count; i++) {
            res.push(start + i * step);
        }
        return res;
    }
}