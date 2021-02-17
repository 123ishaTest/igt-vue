import {AbstractField} from "@/ig-template/developer-panel/fields/AbstractField";

/**
 * Runs a custom function when the button is pressed
 */
export class FunctionField extends AbstractField {

    func: Function ;

    constructor(func: Function, label?: string) {
        super('', label);
        this.func = func;
        this.setComponentName('igt-button-field');
    }

}