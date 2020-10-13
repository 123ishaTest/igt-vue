import {Requirement} from "@/ig-template/tools/requirements/Requirement";

export class CustomRequirement extends Requirement {

    private readonly _hintText: string;
    private readonly _actualFunction: Function;
    private readonly _targetFunction: Function;


    constructor(hintText: string, actualFunction: Function, targetFunction: Function) {
        super();
        this._hintText = hintText;
        this._actualFunction = actualFunction;
        this._targetFunction = targetFunction;
    }

    get actualValue(): number {
        return this._actualFunction();
    }

    get targetValue(): number {
        return this._targetFunction();
    }

    get hint(): string {
        return this._hintText
    }


}
