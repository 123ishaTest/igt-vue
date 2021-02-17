import {AbstractField} from "@/ig-template/developer-panel/fields/AbstractField";

export class ChoiceField extends AbstractField {
    options: [string, number][];

    constructor(value: string, options: [string, number][], label?: string) {
        super(value, label);
        this.options = options;
        this.setComponentName('igt-choice-field');
    }

}