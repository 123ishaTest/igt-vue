import {Requirement} from "@/ig-template/tools/requirements/Requirement";

/**
 * A requirement that is completed when its condition function evaluates to true.
 * You rarely want to use this. It is often better to create a new Requirement class for your use case.
 */
export class BooleanRequirement extends Requirement {
    private readonly _hintText: string
    private readonly _condition: Function;


    constructor(hint: string, condition: Function) {
        super();
        this._hintText = hint;
        this._condition = condition;
    }

    get actualValue(): number {
        return this._condition() ? 1 : 0;
    }

    get hint(): string {
        return this._hintText;
    }

    get targetValue(): number {
        return 1;
    }

}
