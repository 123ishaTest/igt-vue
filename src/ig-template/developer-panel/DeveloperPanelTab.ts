import {AbstractField} from "@/ig-template/developer-panel/AbstractField";

export class DeveloperPanelTab {
    label: string;
    children: AbstractField[];


    constructor(label: string, children: AbstractField[]) {
        this.label = label;
        this.children = children;
    }

    isEmpty(): boolean {
        return this.children.length == 0;
    }
}