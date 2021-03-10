import {Achievement} from "@/ig-template/features/achievements/Achievement";
import {AchievementId} from "@/ig-template/features/achievements/AchievementId";
import {ManualRequirement} from "@/ig-template/tools/requirements/ManualRequirement";

export class CustomAchievement extends Achievement {

    constructor(key: AchievementId, title: string, description: string, image: string = '') {
        super(key, title, description, new ManualRequirement(), image);
    }

    forceComplete() {
        (this.requirement as ManualRequirement).forceCompletion();
    }
}