import {AbstractExpLevel} from "@/ig-template/tools/exp-level/AbstractExpLevel";

export class DiscreteExpLevel extends AbstractExpLevel {
    expPerLevel: number[]

    constructor(maxLevel: number, expPerLevel: number[], baseExp: number = 0) {
        super(maxLevel, baseExp);
        if (maxLevel !== expPerLevel.length) {
            throw new Error("MaxLevel is not equal to length of ExpPerLevel");
        }

        // Add infinity to avoid leveling up afterwards
        expPerLevel.push(Infinity);
        this.expPerLevel = expPerLevel;
    }

    getExpNeededForLevel(level: number): number {
        return this.expPerLevel[level - 1];
    }

}