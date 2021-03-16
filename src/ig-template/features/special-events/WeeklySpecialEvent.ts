import {SpecialEventId} from "@/ig-template/features/special-events/SpecialEventId";
import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";
import {SpecialEvent} from "@/ig-template/features/special-events/SpecialEvent";
import {DateHelper} from "@/ig-template/util/DateHelper";

/**
 * A special event that happens weekly.
 */
export class WeeklySpecialEvent extends SpecialEvent {

    constructor(id: SpecialEventId, title: string, description: string, startTime: Date, endTime: Date, startFunction: () => void, endFunction: () => void, requirement: Requirement = new NoRequirement()) {
        super(id, title, description, startTime, endTime, startFunction, endFunction, requirement);
    }


    end() {
        this.increaseWeek();
        super.end();
    }

    increaseWeek() {
        this.startTime = DateHelper.addWeeks(this.startTime, 1);
        this.endTime = DateHelper.addWeeks(this.endTime, 1);
    }
}
