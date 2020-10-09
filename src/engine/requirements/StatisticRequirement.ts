import {App} from "@/App.ts";
import {Requirement} from "./Requirement";
import {StatisticType} from "@/engine/features/statistics/StatisticType";

export class StatisticRequirement extends Requirement {
    key: StatisticType;
    targetValue: number;


    constructor(key: StatisticType, targetValue: number) {
        super();
        this.key = key;
        this.targetValue = targetValue;
    }

    lockedReason(): string {
        return `The statistic ${App.game.statistics.getStatistic(this.key)?.key} needs to be at least ${this.targetValue}`;
    }

    getActualValue(): number {
        return App.game.statistics.getStatistic(this.key)?.value as number;
    }

    getTargetValue(): number {
        return this.targetValue;
    }
}
