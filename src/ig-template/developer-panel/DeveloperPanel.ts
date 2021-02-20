import {DeveloperPanelTab} from "@/ig-template/developer-panel/DeveloperPanelTab";

export class DeveloperPanel {
    tabs: DeveloperPanelTab[];

    constructor(tabs: DeveloperPanelTab[]) {
        this.tabs = tabs;
    }
}