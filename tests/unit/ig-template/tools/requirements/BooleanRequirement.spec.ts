import {BooleanRequirement} from "@/ig-template/tools/requirements/BooleanRequirement";


describe('Boolean Requirement', () => {

    test('boolean requirement always true', () => {
        // Arrange
        const alwaysTrue = new BooleanRequirement("Always true", () => true);

        // Act
        const isCompleted = alwaysTrue.isCompleted;
        const progress = alwaysTrue.progress;

        // Assert
        expect(isCompleted).toBeTruthy();
        expect(progress.actual).toBe(1);
        expect(progress.target).toBe(1);
        expect(alwaysTrue.hint).toBe("Always true");
    });

    test('custom requirement always false', () => {
        // Arrange
        const alwaysFalse = new BooleanRequirement("Always false", () => false);

        // Act
        const isCompleted = alwaysFalse.isCompleted;
        const progress = alwaysFalse.progress;

        // Assert
        expect(isCompleted).toBeFalsy();
        expect(progress.actual).toBe(0);
        expect(progress.target).toBe(1);
    });


});
