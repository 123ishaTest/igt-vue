export abstract class AbstractLoot {
    abstract loot: any;
    amount: number;

    protected constructor(amount: number) {
        this.amount = amount;
    }

    /**
     * Actually award the loot-tables
     */
    abstract apply(): void;

    /**
     * Override to implement comparisons. Used for simplifying the list of loot-tables
     */
    abstract equals(other: AbstractLoot): boolean;
}
