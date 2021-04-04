import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";
import Decimal from "@/lib/break_eternity.min";

describe('No Requirement', () => {

    test('no requirement always true', () => {
        // Arrange
        const alwaysTrue = new NoRequirement();

        // Act
        const isCompleted = alwaysTrue.isCompleted;
        const progress = alwaysTrue.progress;

        // Assert
        expect(isCompleted).toBeTruthy();
        expect(progress.actual).toEqual(new Decimal(0));
        expect(progress.target).toEqual(new Decimal(0));
        expect(alwaysTrue.hint).toBe("");
    });


});
