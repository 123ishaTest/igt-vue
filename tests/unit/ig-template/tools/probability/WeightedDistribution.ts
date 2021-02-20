import {WeightedDistribution} from "@/ig-template/tools/probability/WeightedDistribution";
import {Outcome} from "@/ig-template/tools/probability/Outcome";
import {BooleanRequirement} from "@/ig-template/tools/requirements/BooleanRequirement";

describe('WeightedDistribution', () => {
    test('draw happy path', () => {
        expect(() => {
            const distribution = new WeightedDistribution([
                new Outcome<number>(1, 3),
                new Outcome<number>(2, 5),
            ]);
            distribution.draw();
        }).not.toThrow();
    });

    test('unmet requirements removing from draw pool', () => {
        expect(() => {
            const distribution = new WeightedDistribution([
                new Outcome<number>(1, 3, new BooleanRequirement('always false', () => false)),
                new Outcome<number>(2, 5),
            ]);
            for (let i = 0; i < 100; i++) {
                const number = distribution.draw();
                expect(number).toBe(2);
            }
        }).not.toThrow();
    });

    test('empty distribution throws error', () => {
        expect(() => {
            const distribution = new WeightedDistribution();
            distribution.draw()
        }).toThrow();
    });

    test('distribution with no met requirement throws error', () => {
        expect(() => {
            const distribution = new WeightedDistribution([
                new Outcome<number>(1, 3, new BooleanRequirement('always false', () => false)),

            ]);
            distribution.draw()
        }).toThrow();
    });

    test('adding and removing', () => {
        const distribution = new WeightedDistribution();
        const outcome = new Outcome(3, 2);
        expect(() => {
            distribution.addOutcome(outcome);
            distribution.draw()
        }).not.toThrow();

        expect(() => {
            distribution.removeOutcome(outcome);

            // Removing twice doesn't matter
            distribution.removeOutcome(outcome);
            distribution.draw()
        }).toThrow();
    });
});
