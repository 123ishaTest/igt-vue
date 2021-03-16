import {SpecialEventId} from "@/ig-template/features/special-events/SpecialEventId";
import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";
import {SpecialEventDateState} from "@/ig-template/features/special-events/SpecialEventDateState";
import {AbstractSpecialEvent} from "@/ig-template/features/special-events/AbstractSpecialEvent";

/**
 * A special event with a set start and end date.
 */
export class SpecialEvent extends AbstractSpecialEvent {
    startTime: Date;
    endTime: Date;


    constructor(id: SpecialEventId, title: string, description: string, startTime: Date, endTime: Date, startFunction: () => void, endFunction: () => void, requirement: Requirement = new NoRequirement()) {
        super(id, title, description, startFunction, endFunction, requirement);
        this.startTime = startTime;
        this.endTime = endTime;
    }

    canStart(date: Date): boolean {
        if (this.isActive) {
            return false;
        }
        return this.getDateState(date) === SpecialEventDateState.During;
    }

    public getTimeUntilStart(date: Date) {
        return new Date(+this.startTime - +date);
    }

    public getTimeUntilEnd(date: Date) {
        return new Date(+this.endTime - +date);
    }

    public getDateState(date: Date) {
        if (date < this.startTime) {
            return SpecialEventDateState.Before;
        } else if (date > this.endTime) {
            return SpecialEventDateState.After;
        }
        return SpecialEventDateState.During;
    }
}
