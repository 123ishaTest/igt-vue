import {Feature} from "@/ig-template/features/Feature";
import {SaveData} from "@/ig-template/tools/saving/SaveData";
import {Features} from "@/ig-template/Features";
import {ISimpleEvent, SimpleEventDispatcher} from "strongly-typed-events";
import {SpecialEventId} from "@/ig-template/features/special-events/SpecialEventId";
import {DateHelper} from "@/ig-template/util/DateHelper";
import {WeeklySpecialEvent} from "@/ig-template/features/special-events/WeeklySpecialEvent";
import {AbstractSpecialEvent} from "@/ig-template/features/special-events/AbstractSpecialEvent";
import {SpecialEvent} from "@/ig-template/features/special-events/SpecialEvent";

export class SpecialEvents extends Feature {

    events: AbstractSpecialEvent[]

    // Delay between checking for special events
    private readonly SPECIAL_EVENT_CHECK_TIME: number = 1.0;
    private _checkCounter: number = 0;

    private _onEventStart = new SimpleEventDispatcher<AbstractSpecialEvent>();

    private _onEventEnd = new SimpleEventDispatcher<AbstractSpecialEvent>();


    constructor() {
        super('special-events');
        this.events = [];
    }

    initialize(features: Features) {
        this.addEvent(
            new SpecialEvent(
                SpecialEventId.AllowButton,
                'Example Event',
                'Make the sacred button appear in the example feature',
                DateHelper.addMinutes(new Date(), 1),
                DateHelper.addMinutes(new Date(), 2),
                () => {
                    features.example.showEventButton = true;
                },
                () => {
                    features.example.showEventButton = false;
                },
            )
        );
        this.addEvent(
            new WeeklySpecialEvent(
                SpecialEventId.Weekly,
                'Weekly Event',
                'Weekly',
                new Date(2021, 2, 9),
                new Date(2021, 2, 10),
                () => {
                    features.example.weeklyEventActive = true;
                },
                () => {
                    features.example.weeklyEventActive = false;
                },
            )
        );
    }

    addEvent(event: AbstractSpecialEvent) {
        if (event instanceof WeeklySpecialEvent) {
            const now = Date.now()
            while (+event.endTime < now) {
                console.log("increasing")
                event.increaseWeek();
            }
        }

        this.events.push(event);
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

    /**
     * Emitted whenever an event starts
     */
    public get onEventStart(): ISimpleEvent<AbstractSpecialEvent> {
        return this._onEventStart.asEvent();
    }

    /**
     * Emitted whenever an event end
     */
    public get onEventEnd(): ISimpleEvent<AbstractSpecialEvent> {
        return this._onEventEnd.asEvent();
    }


}
