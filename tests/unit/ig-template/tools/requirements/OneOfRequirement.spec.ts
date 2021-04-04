import {CustomRequirement} from "@/ig-template/tools/requirements/CustomRequirement";
import {OneOfRequirement} from "@/ig-template/tools/requirements/OneOfRequirement";
import Decimal from "@/lib/break_eternity.min";


describe('One Of Requirement', () => {

    test('both false', () => {
        // Arrange
        const oneOf = new OneOfRequirement([
            new CustomRequirement("Always false", () => 0, () => 1),
            new CustomRequirement("Always false", () => 0, () => 1),
        ]);

        // Act
        const isCompleted = oneOf.isCompleted;
        const progress = oneOf.progress;

        // Assert
        expect(isCompleted).toBeFalsy();
        expect(progress.actual).toEqual(new Decimal(0));
        expect(progress.target).toEqual(new Decimal(1));
        expect(oneOf.hint).toBe("Complete one of the following requirements:\nAlways false\nAlways false\n");
    });

    test('one true one false', () => {
        // Arrange
        const oneOf = new OneOfRequirement([
            new CustomRequirement("Always true", () => 1, () => 1),
            new CustomRequirement("Always false", () => 0, () => 1)
        ]);

        // Act
        const isCompleted = oneOf.isCompleted;
        const progress = oneOf.progress;

        // Assert
        expect(isCompleted).toBeTruthy();
        expect(progress.actual).toEqual(new Decimal(1));
        expect(progress.target).toEqual(new Decimal(1));
    });

    test('both true', () => {
        // Arrange
        const oneOf = new OneOfRequirement([
            new CustomRequirement("Always true", () => 1, () => 1),
            new CustomRequirement("Always true", () => 1, () => 1),
        ]);

        // Act
        const isCompleted = oneOf.isCompleted;
        const progress = oneOf.progress;

        // Assert
        expect(isCompleted).toBeTruthy();
        expect(progress.actual).toEqual(new Decimal(1));
        expect(progress.target).toEqual(new Decimal(1));
    });


});
