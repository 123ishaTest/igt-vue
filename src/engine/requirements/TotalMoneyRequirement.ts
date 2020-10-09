import {StatisticRequirement} from "./StatisticRequirement";
import {StatisticType} from "@/engine/features/statistics/StatisticType";

export class TotalMoneyRequirement extends StatisticRequirement {

    constructor(targetValue: number) {
        super(StatisticType.TotalMoneyGained, targetValue);
    }

    lockedReason(): string {
        return `Total money needs to be at least ${this.targetValue}`;
    }
}
