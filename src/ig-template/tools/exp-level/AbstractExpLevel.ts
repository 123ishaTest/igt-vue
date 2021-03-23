import {Progress} from "@/ig-template/tools/requirements/Progress";

/**
 * Abstract class to calculate basic level behaviour.
 * The level isn't stored, only the experience.
 */
export abstract class AbstractExpLevel {
    exp: number;
    maxLevel: number;

    protected constructor(maxLevel: number, baseExp: number) {
        this.exp = baseExp;
        this.maxLevel = maxLevel
    }

    gainExperience(amount: number): void {
        this.exp += amount;
    }

    getLevel(): number {
        for (let i = 1; i <= this.maxLevel; i++) {
            if (this.exp < this.getExpNeededForLevel(i)) {
                return i - 1;
            }
        }
        return this.maxLevel;
    }

    getLevelProgress(): Progress {
        const level = this.getLevel();
        const expForNextLevel = this.getExpForNextLevel(level);
        const alreadyGainedExp = this.exp - this.getExpNeededForLevel(level);
        return new Progress(alreadyGainedExp, expForNextLevel);
    }

    getExpForNextLevel(level: number): number {
        return this.getExpNeededForLevel(level + 1) - this.getExpNeededForLevel(level);
    }

    abstract getExpNeededForLevel(level: number): number;

}
