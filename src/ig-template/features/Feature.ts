import {Saveable} from "@/ig-template/tools/saving/Saveable";
import {SaveData} from "@/ig-template/tools/saving/SaveData";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";

/**
 * An abstract class that all features should extend for.
 */
export abstract class Feature implements Saveable {

    /**
     * Initialize all feature attributes.
     * Note that you should not assume other features exist already here
     * @param saveKey
     */
    protected constructor(saveKey: string) {
        this.saveKey = saveKey;
    }

    /**
     * Called after all features are created.
     * Can be used to subscribe to other features events
     */
    initialize(): void {
        // This method intentionally left blank
    }

    /**
     * Runs when the game gets started. Can be run multiple times if the player can stop the game
     */
    start(): void {
        // This method intentionally left blank
    }

    /**
     * Runs when the game gets stopped. NOT when the game closes
     */
    stop(): void {
        // This method intentionally left blank
    }

    /**
     * Default false to avoid not implementing the proper restrictions
     */
    canAccess(): boolean {
        return false;
    }

    /**
     * Override in features if specified
     * IMPORTANT: Make sure to always return 1 as the default
     */
    getTotalCurrencyMultiplier(type: CurrencyType) {
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
