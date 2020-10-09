import {Feature} from "@/game/Feature";
import {Achievement} from "@/engine/features/achievements/Achievement";
import {TotalMoneyRequirement} from "@/engine/requirements/TotalMoneyRequirement";
import {AchievementType} from "@/engine/features/achievements/AchievementType";
import {AchievementsSaveData} from "@/engine/features/achievements/AchievementsSaveData";

export class Achievements extends Feature {
    name: string = "Achievements";
    saveKey: string = 'achievements';

    list: Record<AchievementType, Achievement>

    // Delay between checking for achievements
    private readonly ACHIEVEMENT_CHECK_TIME: number = 2.0;
    private checkCounter: number = 0;

    constructor() {
        super();
        this.list = {} as Record<AchievementType, Achievement>;
    }

    initialize(): void {
        this.registerAchievement(new Achievement(AchievementType.TotalMoney10, 'Small potatoes', 'Have 10 total money', new TotalMoneyRequirement(10)))
        this.registerAchievement(new Achievement(AchievementType.TotalMoney100, 'Medium potatoes', 'Have 100 total money', new TotalMoneyRequirement(100)))
        this.registerAchievement(new Achievement(AchievementType.TotalMoney1000, 'Larger potatoes', 'Have 1000 total money', new TotalMoneyRequirement(1000)))
        this.registerAchievement(new Achievement(AchievementType.TotalMoney10000, 'Big potatoes', 'Have 10000 total money', new TotalMoneyRequirement(10000)))
    }


    update(delta: number) {
        this.checkCounter += delta;
        if (this.checkCounter >= this.ACHIEVEMENT_CHECK_TIME) {
            this.checkForAchievementsCompleted();
            this.checkCounter = 0;
        }
    }

    public checkForAchievementsCompleted() {
        for (const key in this.list) {
            const achievement = this.list[key as AchievementType];
            if (achievement.requirementsCompleted()) {
                achievement.unlock();
            }
        }
    }

    private registerAchievement(achievement: Achievement) {
        this.list[achievement.key] = achievement;
    }

    public getAchievement(key: AchievementType): Achievement | null {
        if (!this.hasAchievement(key)) {
            console.warn(`Could not find achievement with key ${key}`)

            return null;
        } else {
            return this.list[key];
        }
    }

    private hasAchievement(key: AchievementType): boolean {
        return key in this.list
    }


    load(data: AchievementsSaveData): void {
        for (const key of data.list) {
            const achievement = this.getAchievement(key);
            if (achievement !== null) {
                achievement.unlocked = true
            }
        }
    }

    parseSaveData(json: Record<string, unknown>): AchievementsSaveData {
        const data = new AchievementsSaveData();
        const list = json?.list as AchievementType[];
        if (list == null) {
            return data;
        }
        for (const key of list) {
            data.addAchievement(key);
        }
        return data;
    }

    save(): AchievementsSaveData {
        const data = new AchievementsSaveData();
        for (const key in this.list) {
            if (this.list[key as AchievementType].unlocked) {
                data.addAchievement(key as AchievementType);
            }
        }
        return data;
    }

}
