import {AchievementType} from "@/engine/features/achievements/AchievementType";

/**
 * Unlocked achievements are saved as a list of keys
 */
export class AchievementsSaveData {
    list: AchievementType[];

    constructor() {
        this.list = [];
    }

    addAchievement(key: AchievementType): void {
        this.list.push(key);
    }

}
