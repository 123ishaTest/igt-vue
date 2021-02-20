import {Progress} from "@/ig-template/tools/requirements/Progress";

/**
 * Abstract class to calculate basic level behaviour.
 * The level isn't stored, only the experience.
 */
export abstract class AbstractExpLevel {
    // readonly EXP_TO_LEVEL = [0, 100, 250, 500, 1000, Infinity]

    exp: number;
    maxLevel: number;

    protected constructor(maxLevel: number, baseExp: number = 0) {
        this.exp = baseExp;
        this.maxLevel = maxLevel
    }

    gainExperience(amount: number): void {
        this.exp += amount;
    }

    getLevel(): number {
        for (let i = 0; i < this.getExpNeededForLevel.length; i++) {
            if (this.exp < this.getExpNeededForLevel(i)) {
                return i;
            }
        }
        console.error(`Could not calculate level with exp ${this.exp}`);
        return -1;
    }

    getLevelProgress(): Progress {
        const level = this.getLevel();
        const expForNextLevel = this.getExpForNextLevel(level);
        const alreadyGainedExp = this.exp - this.getExpNeededForLevel(level - 1);
        return new Progress(alreadyGainedExp, expForNextLevel);
    }

    getExpForNextLevel(level: number): number {
        return this.getExpNeededForLevel(level) - this.getExpNeededForLevel(level - 1);
    }

    abstract getExpNeededForLevel(level: number): number;

}