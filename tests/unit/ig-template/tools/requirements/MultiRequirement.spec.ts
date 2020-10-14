import {CustomRequirement} from "@/ig-template/tools/requirements/CustomRequirement";
import {MultiRequirement} from "@/ig-template/tools/requirements/MultiRequirement";


describe('Multi Requirement', () => {

    test('one true one false', () => {
        // Arrange
        const multi = new MultiRequirement([
            new CustomRequirement("Always true", () => 1, () => 1),
            new CustomRequirement("Always false", () => 0, () => 1)
        ]);

        // Act
        const isCompleted = multi.isCompleted;
        const progress = multi.progress;

        // Assert
        expect(isCompleted).toBeFalsy();
        expect(progress.actual).toBe(1);
        expect(progress.target).toBe(2);
        expect(multi.hint).toBe("Complete the following requirements:\nAlways true\nAlways false\n");
    });

    test('both true', () => {
        // Arrange
        const multi = new MultiRequirement([
            new CustomRequirement("Always true", () => 1, () => 1),
            new CustomRequirement("Always true", () => 1, () => 1),
        ]);

        // Act
        const isCompleted = multi.isCompleted;
        const progress = multi.progress;

        // Assert
        expect(isCompleted).toBeTruthy();
        expect(progress.actual).toBe(2);
        expect(progress.target).toBe(2);
    });


});
