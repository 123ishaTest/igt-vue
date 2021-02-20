import {AbstractField} from "@/ig-template/developer-panel/fields/AbstractField";

export class RangeField extends AbstractField {

    min: number;
    max: number
    step: number

    constructor(propertyName: string, min: number = 0, max: number = 100, step = 1, label?: string) {
        super(propertyName, label);
        this.min = min;
        this.max = max;
        this.step = step;
        this.setComponentName('igt-range-field');
    }

}