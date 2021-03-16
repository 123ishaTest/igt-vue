import {SpecialEventId} from "@/ig-template/features/special-events/SpecialEventId";
import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";

export class SpecialEvent {
    id: SpecialEventId;
    title: string;
    description: string;
    startTime: Date;
    startFunction: () => void;
    endTime: Date;
    endFunction: () => void;
    requirement: Requirement;
    isActive = false;

    constructor(id: SpecialEventId, title: string, description: string, startTime: Date, endTime: Date, startFunction: () => void, endFunction: () => void, requirement: Requirement = new NoRequirement()) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.startTime = startTime;
        this.startFunction = startFunction;
        this.endTime = endTime;
        this.endFunction = endFunction;
        this.requirement = requirement;
    }

    canStart(date: Date) {
        if (this.isActive) {
            return false;
        }
        if (date > this.endTime) {
            return false;
        }
        return date > this.startTime;
    }

    canEnd(date: Date) {
        if (!this.isActive) {
            return false;
        }
        return date > this.endTime;
    }

    start(): void {
        if (this.isActive) {
            console.warn(`Special Event ${this.title} already active`);
            return;
        }
        this.isActive = true;
        this.startFunction();
    }

    end(): void {
        if (!this.isActive) {
            console.warn(`Cannot end. Special Event ${this.title} is not active.`);
            return;
        }
        this.isActive = false;
        this.endFunction();
    }
}
