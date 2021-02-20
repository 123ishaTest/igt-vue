import {ContinuousExpLevel} from "@/ig-template/tools/exp-level/ContinuousExpLevel";

describe('Continuous Exp Level', () => {
    function levelFunction(level: number) {
        return (level - 1) * 10;
    }
    const level = new ContinuousExpLevel(5, levelFunction)

    beforeEach(() => {
        level.exp = 0;
    })

    test('Get Exp Needed For Level', () => {

        expect(level.getExpNeededForLevel(1)).toBe(0);
        expect(level.getExpNeededForLevel(2)).toBe(10);
        expect(level.getExpNeededForLevel(100)).toBe(Infinity);
    });

    test('5 levels getLevel', () => {
        expect(level.getLevel()).toBe(1)

        level.gainExperience(5)
        expect(level.getLevel()).toBe(1)

        level.gainExperience(5)
        expect(level.getLevel()).toBe(2)

        level.gainExperience(100000)
        expect(level.getLevel()).toBe(5)


    });

    test('Base exp', () => {
        const level = new ContinuousExpLevel(5, levelFunction, 10)
        expect(level.getLevel()).toBe(2)

    });

});
