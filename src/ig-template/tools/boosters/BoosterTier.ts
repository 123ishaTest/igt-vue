import {Currency} from "@/ig-template/features/wallet/Currency";

export class BoosterTier {
    displayName: string;

    /**
     * All costs are per second
     */
    costs: Currency[];

    output: number;


    constructor(costs: Currency[], output: number, displayName: string = "") {
        this.costs = costs;
        this.output = output;
        this.displayName = displayName;
    }

    getCostPerDelta(delta: number) {
        return this.costs.map(cost => {
            return new Currency(cost.amount * delta, cost.type);
        })
    }
}
