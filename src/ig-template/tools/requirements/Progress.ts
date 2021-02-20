export class Progress {
    actual: number;
    target: number;

    constructor(actual: number, target: number) {
        this.actual = actual;
        this.target = target;
    }
}
