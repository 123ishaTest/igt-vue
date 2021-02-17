import {AbstractField} from "@/ig-template/developer-panel/AbstractField";

export class DisplayField extends AbstractField {

    constructor(value: string, label?: string) {
        super(value, label);
        this.setComponentName('igt-display-field');
    }

}