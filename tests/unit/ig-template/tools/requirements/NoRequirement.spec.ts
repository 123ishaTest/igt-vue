import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";

describe('No Requirement', () => {

    test('no requirement always true', () => {
        // Arrange
        const alwaysTrue = new NoRequirement();

        // Act
        const isCompleted = alwaysTrue.isCompleted;
        const progress = alwaysTrue.progress;

        // Assert
        expect(isCompleted).toBeTruthy();
        expect(progress.actual).toBe(0);
        expect(progress.target).toBe(0);
        expect(alwaysTrue.hint).toBe("");
    });


});
