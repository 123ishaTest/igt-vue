import {GameState} from "./GameState";
import {LocalStorage} from "@/ig-template/tools/saving/LocalStorage";
import {Feature} from "@/ig-template/features/Feature";

export class Game {
    private _tickInterval: any;

    public allFeatures: Feature[];

    public state: GameState;

    private readonly TICK_DURATION = 0.1;

    /**
     * Make sure this key is unique to your game.
     * Otherwise you might run into loading conflicts when multiple games are hosted on the same domain (such as <username.github.io/game)
     */
    private readonly SAVE_KEY = "unique-key-for-your-game";

    constructor() {
        this.allFeatures = [];

        this.state = GameState.Launching;
    }

    /**
     * Register a feature so it becomes part of all features
     */
    private registerFeature<T extends Feature>(feature: T): T {
        this.allFeatures.push(feature);
        return feature;
    }

    /**
     * Update all features
     */
    private update(): void {
        if (this.state != GameState.Playing) {
            return;
        }

        for (const feature of this.allFeatures) {
            feature.update(this.TICK_DURATION)
        }
    }


    /**
     * Initialize all features
     */
    public initialize(): void {
        for (const feature of this.allFeatures) {
            feature.initialize();
        }
    }

    /**
     * Start the main update loop
     */
    public start(): void {
        if (this.state !== GameState.Stopped && this.state !== GameState.Launching) {
            this.printStateWarning("Cannot start the game twice.");
            return;
        }

        for (const feature of this.allFeatures) {
            feature.start();
        }

        this._tickInterval = setInterval(() => this.update(), this.TICK_DURATION * 1000);

        this.state = GameState.Playing;
        console.debug("Game Started");
    }

    public pause(): void {
        if (this.state !== GameState.Playing) {
            this.printStateWarning("Cannot pause the game if we're not playing.");
            return;
        }
        clearInterval(this._tickInterval);

        this.state = GameState.Paused;
        console.debug("Game Paused");
    }


    public resume(): void {
        if (this.state !== GameState.Paused) {
            this.printStateWarning("Cannot resume the game if we're not paused.");
            return;
        }
        this._tickInterval = setInterval(() => this.update(), this.TICK_DURATION * 1000);

        this.state = GameState.Playing;
        console.debug("Game Resumed");
    }

    /**
     * Stop the main update loop
     */
    public stop(): void {
        clearInterval(this._tickInterval);

        this.state = GameState.Stopped;
        console.debug("Stopped");
    }

    /**
     * Recursively save all registered features
     */
    public save(): void {
        const res: Record<string, unknown> = {};
        for (const feature of this.allFeatures) {
            res[feature.saveKey] = feature.save()
        }
        LocalStorage.store(this.SAVE_KEY, res)
    }

    /**
     * Delete the locally stored save
     */
    public deleteSave(): void {
        LocalStorage.delete(this.SAVE_KEY);
    }

    /**
     * Recursively load all registered features
     */
    public load(): void {
        const saveData = LocalStorage.get(this.SAVE_KEY)
        for (const feature of this.allFeatures) {
            const featureSaveData: Record<string, unknown> = saveData == null ? {} : saveData[feature.saveKey] as Record<string, unknown> ?? {};
            feature.load(featureSaveData);
        }
    }

    private printStateWarning(reason: string) {
        console.warn(`Current state = ${this.state}.`, reason);
    }

}
