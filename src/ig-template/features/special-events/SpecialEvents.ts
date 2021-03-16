import {Feature} from "@/ig-template/features/Feature";
import {SaveData} from "@/ig-template/tools/saving/SaveData";
import {SpecialEvent} from "@/ig-template/features/special-events/SpecialEvent";
import {Features} from "@/ig-template/Features";
import {SimpleEventDispatcher} from "strongly-typed-events";
import {SpecialEventId} from "@/ig-template/features/special-events/SpecialEventId";
import {DateHelper} from "@/ig-template/util/DateHelper";

export class SpecialEvents extends Feature {

    events: SpecialEvent[]

    // Delay between checking for special events
    private readonly SPECIAL_EVENT_CHECK_TIME: number = 10.0;
    private _checkCounter: number = 0;

    /**
     * Emitted whenever an event starts
     */
    private _onEventStart = new SimpleEventDispatcher<SpecialEvent>();

    /**
     * Emitted whenever an event end
     */
    private _onEventEnd = new SimpleEventDispatcher<SpecialEvent>();


    constructor() {
        super('special-events');
        this.events = [];
    }

    initialize(features: Features) {
        this.events.push(
            new SpecialEvent(
                SpecialEventId.AllowButtonEvent,
                'Example Event',
                'Make the sacred button appear in the example feature',
                DateHelper.addMinutes(new Date(), 1),
                DateHelper.addMinutes(new Date(), 2),
                () => {
                    console.log("start");
                },
                () => {
                    console.log("end");
                },
            )
        );
    }


    update(delta: number) {
        this._checkCounter += delta;
        if (this._checkCounter >= this.SPECIAL_EVENT_CHECK_TIME) {
            this.checkForEvents();
            this._checkCounter = 0;
        }
    }

    private checkForEvents(): void {
        const now = new Date();
        for (const event of this.events) {
            if (event.canStart(now)) {
                event.start();
            }
            if (event.canEnd(now)) {
                event.end();
            }
        }
    }


    load(): void {
        // Empty
    }

    save(): SaveData {
        return {};
    }

}
