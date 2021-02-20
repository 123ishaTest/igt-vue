import {DiscreteExpLevel} from "@/ig-template/tools/exp-level/DiscreteExpLevel";

describe('Discrete Exp Level', () => {

    test('5 levels getLevel', () => {
        const level = new DiscreteExpLevel(5, [0, 10, 30, 60, 100])

        expect(level.getLevel()).toBe(1)

        level.gainExperience(5)
        expect(level.getLevel()).toBe(1)

        level.gainExperience(5)
        expect(level.getLevel()).toBe(2)

        level.gainExperience(100000)
        expect(level.getLevel()).toBe(5)


    });

    test('Get Exp Needed For Level', () => {
        const level = new DiscreteExpLevel(5, [0, 10, 30, 60, 100])

        expect(level.getExpNeededForLevel(1)).toBe(0);
        expect(level.getExpNeededForLevel(2)).toBe(10);
    });

    test('Incorrect max level', () => {
        expect(() => {
            new DiscreteExpLevel(2, [0, 10, 30, 60, 100]);
        }).toThrow();
    });

    test('Base exp', () => {
        const level = new DiscreteExpLevel(5, [0, 10, 30, 60, 100], 10)
        expect(level.getLevel()).toBe(2)
    });

    test('Get Level Progress', () => {
        // Arrange
        const level = new DiscreteExpLevel(5, [0, 10, 30, 60, 100])

        // Act
        level.gainExperience(15)
        const progress = level.getLevelProgress();

        // Assert
        expect(progress.actual).toBe(5);
        expect(progress.target).toBe(20);
    })

});
