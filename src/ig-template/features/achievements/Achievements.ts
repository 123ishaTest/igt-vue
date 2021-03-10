import {Achievement} from "@/ig-template/features/achievements/Achievement";
import {AchievementId} from "@/ig-template/features/achievements/AchievementId";
import {Feature} from "@/ig-template/features/Feature";
import {AchievementsSaveData} from "@/ig-template/features/achievements/AchievementSaveData";
import {Features} from "@/ig-template/Features";
import {ISimpleEvent, SimpleEventDispatcher} from "strongly-typed-events";
import {CustomAchievement} from "@/ig-template/features/achievements/CustomAchievement";
import {NumberStatisticRequirement} from "@/ig-template/features/statistics/requirements/NumberStatisticRequirement";

export class Achievements extends Feature {
    list: Record<AchievementId, Achievement>

    // Delay between checking for achievements
    private readonly ACHIEVEMENT_CHECK_TIME: number = 2.0;
    private _checkCounter: number = 0;

    private _onUnlock = new SimpleEventDispatcher<Achievement>();

    /**
     * Emitted whenever an achievement is unlocked.
     */
    public get onUnlock(): ISimpleEvent<Achievement> {
        return this._onUnlock.asEvent();
    }

    constructor() {
        super('achievements');
        this.list = {} as Record<AchievementId, Achievement>;
    }

    initialize(features: Features): void {
        // You can base achievements on statistics
        this.registerAchievement(
            new Achievement(
                AchievementId.TotalMoney100, "Gain 100 total money", 'Automatically triggered if you gain enough money',
                new NumberStatisticRequirement(features.statistics.totalMoneyGained, 100),
            )
        );

        // Or have manual ones. You'll have to trigger them with `achievement.forceUnlock()`
        this.registerAchievement(
            new CustomAchievement(AchievementId.ExampleAchievement, "Custom Achievement", 'Can be completed manually')
        );


    }


    update(delta: number) {
        this._checkCounter += delta;
        if (this._checkCounter >= this.ACHIEVEMENT_CHECK_TIME) {
            this.checkForAchievementsCompleted();
            this._checkCounter = 0;
        }
    }

    public checkForAchievementsCompleted() {
        for (const key in this.list) {
            const achievement = this.list[key as AchievementId];
            if (achievement.requirementsCompleted()) {
                const isJustUnlocked = achievement.unlock();
                if (isJustUnlocked) {
                    this._onUnlock.dispatch(achievement);
                }
            }
        }
    }

    private registerAchievement<T extends Achievement>(achievement: T): T {
        this.list[achievement.key] = achievement;
        return achievement;
    }

    public getAchievement(key: AchievementId): Achievement | null {
        if (!this.hasAchievement(key)) {
            console.warn(`Could not find achievement with key ${key}`)

            return null;
        } else {
            return this.list[key];
        }
    }

    private hasAchievement(key: AchievementId): boolean {
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


    save(): AchievementsSaveData {
        const data = new AchievementsSaveData();
        for (const key in this.list) {
            if (this.list[key as AchievementId].unlocked) {
                data.addAchievement(key as AchievementId);
            }
        }
        return data;
    }

}