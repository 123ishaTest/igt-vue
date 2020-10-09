import {Requirement} from "@/engine/requirements/Requirement";
import {SimpleEventDispatcher, ISimpleEvent} from "strongly-typed-events";
import {RequirementProgress} from "@/engine/requirements/RequirementProgress";
import {AchievementType} from "@/engine/features/achievements/AchievementType";

export class Achievement {
    public key: AchievementType;
    public title: string;
    public description: string;
    public requirement: Requirement;

    public unlocked: boolean

    private _onUnlock = new SimpleEventDispatcher<Achievement>();

    constructor(key: AchievementType, title: string, description: string, requirement: Requirement) {
        this.key = key;
        this.title = title;
        this.description = description;
        this.requirement = requirement;
        this.unlocked = false
    }

    unlock(): void {
        if (!this.unlocked) {
            this.unlocked = true;
            this._onUnlock.dispatch(this)
        }
    }

    requirementsCompleted(): boolean {
        return this.requirement.isCompleted();
    }

    getProgress(): RequirementProgress {
        return this.requirement.getProgress();
    }

    public isUnlocked(): boolean {
        return this.requirement.isCompleted();
    }

    public get onUnlock(): ISimpleEvent<Achievement> {
        return this._onUnlock.asEvent();
    }

}
