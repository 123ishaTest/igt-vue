import {ISimpleEvent, SimpleEventDispatcher} from "strongly-typed-events";
import {Progress} from "@/ig-template/tools/requirements/Progress";
import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";

export abstract class AbstractAction {
    description: string;
    duration: number;
    repeat: number; // 0, x, Infinity (until error)

    isStarted: boolean = false;
    currentProgress: number = 0;

    isFinished: boolean = false;

    requirement: Requirement;

    // One iteration done
    private _onCompletion = new SimpleEventDispatcher<AbstractAction>();
    // Entire action done
    private _onFinished = new SimpleEventDispatcher<AbstractAction>();


    protected constructor(description: string, duration: number, repeat: number = Infinity, requirement: Requirement = new NoRequirement()) {
        this.description = description;
        this.duration = duration;
        this.repeat = repeat;
        this.requirement = requirement
    }

    perform(delta: number): void {
        if (!this.isStarted || this.isFinished) {
            return;
        }

        this.currentProgress += delta;

        if (this.canBeCompleted()) {
            this.complete();
        }
    }

    canBeCompleted() {
        return this.isStarted && this.currentProgress >= this.duration;
    }

    complete(): void {
        if (this.isFinished) {
            console.warn("Cannot complete action that is already finished");
            return;
        }
        this._onCompletion.dispatch(this);
        const canRepeat: boolean = this.gainReward();
        if (canRepeat && this.repeat > 0) {
            this.repeatAction();
        } else {
            this.finish();
        }
    }

    getProgress(): Progress {
        return new Progress(this.currentProgress, this.duration);
    }


    finish(): void {
        this.isFinished = true;
        this._onFinished.dispatch(this);
    }

    repeatAction() {
        this.repeat--;
        this.currentProgress = 0;
    }

    /**
     * Override if more permissions exist.
     */
    canPerform(): boolean {
        return this.requirement.isCompleted;
    }

    toggle() {
        if (this.isStarted) {
            this.stop();
        } else {
            this.start();
        }
    }

    start(): boolean {
        if (!this.canPerform()) {
            console.log(`Can't start action ${this.description}`)
            return false;
        }
        this.isStarted = true;
        return true;
    }

    stop() {
        this.isStarted = false;
        this.currentProgress = 0;
    }

    /**
     * Implement with whatever the reward should be for your action.
     * Return false if something is blocking a repeat (full inventory, etc)
     */
    abstract gainReward(): boolean;


    public get onCompletion(): ISimpleEvent<AbstractAction> {
        return this._onCompletion.asEvent();
    }

    public get onFinished(): ISimpleEvent<AbstractAction> {
        return this._onFinished.asEvent();
    }
}
