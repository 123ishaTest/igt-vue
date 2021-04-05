export abstract class AbstractLoot {
    abstract loot: any;
    amount: number;

    protected constructor(amount: number) {
        this.amount = amount;
    }

    abstract apply(): void;
}
