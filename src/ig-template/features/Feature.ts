import {Saveable} from "@/ig-template/tools/saving/Saveable";
import {SaveData} from "@/ig-template/tools/saving/SaveData";

/**
 * An abstract class that all features should extend for.
 * Has
 */
export abstract class Feature implements Saveable {

    /**
     * Initialize all feature attributes.
     * Note that
     * @param saveKey
     */
    protected constructor(saveKey: string) {
        this.saveKey = saveKey;
    }

    /**
     *
     */
    initialize(): void {
        // This method intentionally left blank
    }

    /**
     * Runs when the game gets started. Can be run multiple times if the player can
     */
    start(): void {
        // This method intentionally left blank
    }

    /**
     * Default false to avoid not implementing the proper restrictions
     */
    canAccess(): boolean {
        return false;
    }

    getCurrencyMultiplier(): number {
        return 1;
    }

    /**
     * Gets called every Game.TICK_DURATION
     * @param delta time since last update
     */
    update(delta: number): void {
        // Override in subclass if needed
    }

    // Saving logic
    saveKey: string;

    abstract load(data: SaveData): void;

    abstract save(): SaveData;


}
