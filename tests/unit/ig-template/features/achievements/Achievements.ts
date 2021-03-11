import {Achievements} from "@/ig-template/features/achievements/Achievements";
import {Achievement} from "@/ig-template/features/achievements/Achievement";
import {AchievementId} from "@/ig-template/features/achievements/AchievementId";
import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";
import {ImpossibleRequirement} from "@/ig-template/tools/requirements/ImpossibleRequirement";
import {CustomAchievement} from "@/ig-template/features/achievements/CustomAchievement";
import {Progress} from "@/ig-template/tools/requirements/Progress";


describe('Achievements', () => {
    const id = "dummy" as AchievementId;

    test('test unlock', () => {
        expect.assertions(2);

        const achievements = new Achievements();
        const achievement = achievements.registerAchievement(
            new Achievement(
                id, 'title', '',
                new NoRequirement(),
            )
        );

        achievements.onUnlock.subscribe(a => {
            expect(a.key).toBe(id);
        });

        // Simulate 3 seconds twice to check for completion once
        achievements.update(3)
        achievements.update(3)

        expect(achievement.unlock()).toBeFalsy()
    });

    test('custom achievements', () => {
        const achievements = new Achievements();
        const achievement = achievements.registerAchievement(
            new CustomAchievement(id, 'title', '')
        );

        achievements.checkForAchievementsCompleted();
        expect(achievement.unlocked).toBeFalsy();

        achievement.forceComplete();
        achievements.checkForAchievementsCompleted();
        expect(achievement.unlocked).toBeTruthy();

    });

    test('incorrect achievement id', () => {
        const achievements = new Achievements();
        const achievement = achievements.getAchievement(id);
        expect(achievement).toBeNull();
    });

    test('get progress', () => {
        const achievements = new Achievements();
        const achievement = achievements.registerAchievement(
            new Achievement(
                id, 'title', '',
                new ImpossibleRequirement(),
            )
        );
        expect(achievement.getProgress()).toStrictEqual(new Progress(0, 1))
    });

    test('dont unlock impossible', () => {
        const achievements = new Achievements();
        const achievement = achievements.registerAchievement(
            new Achievement(
                id, 'title', '',
                new ImpossibleRequirement(),
            )
        );

        achievements.checkForAchievementsCompleted();

        expect(achievement.unlocked).toBeFalsy();

    });


    test('save and load', () => {
        // Arrange
        const achievements = new Achievements();
        const achievement = achievements.registerAchievement(
            new Achievement(
                id, '', '',
                new NoRequirement(),
            )
        );

        achievements.checkForAchievementsCompleted();

        expect(achievement.unlocked).toBeTruthy()

        const saveData = achievements.save();
        achievement.unlocked = false;

        expect(achievement.unlocked).toBeFalsy()

        achievements.load(saveData);

        expect(achievement.unlocked).toBeTruthy()


    });

});
