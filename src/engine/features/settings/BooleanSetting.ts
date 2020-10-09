import {MultipleChoiceSetting} from "./MultipleChoiceSetting";
import {BooleanOption} from "./BooleanOption";

export class BooleanSetting extends MultipleChoiceSetting {
    constructor(name: string, displayName: string, defaultValue: boolean) {
        super(
            name,
            displayName,
            [
                new BooleanOption('On', true),
                new BooleanOption('Off', false),
            ],
            defaultValue
        );
    }

    toggle(): void {
        this.set(!this.value);
    }
}
