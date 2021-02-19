import {AbstractField} from "@/ig-template/developer-panel/fields/AbstractField";

export class ChoiceField extends AbstractField {
    options: [string, number][];

    constructor(propertyName: string, options: [string, number][], label?: string) {
        super(propertyName, label);
        this.options = options;
        this.setComponentName('igt-choice-field');
    }

}