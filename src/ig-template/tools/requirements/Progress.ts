export class Progress {
    actual: number;
    target: number;

    constructor(actual: number, target: number) {
        this.actual = actual;
        this.target = target;
    }

    getPercentage(): number {
        return Math.min(1, Math.max(0, this.actual / this.target));
    }
}
