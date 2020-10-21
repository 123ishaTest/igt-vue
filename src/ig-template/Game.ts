import {GameState} from "./GameState";
import {LocalStorage} from "@/ig-template/tools/saving/LocalStorage";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {Features} from "@/ig-template/Features";
import {Feature} from "@/ig-template/features/Feature";

export class Game {
    private _tickInterval: any;

    /**
     * Object with registered features. If you want them as a list use this.featureList
     */
    public readonly features: Features;

    public state: GameState;


    private readonly TICK_DURATION = 0.1;

    /**
     * Make sure this key is unique to your game.
     * Otherwise you might run into loading conflicts when multiple games are hosted on the same domain (such as <username.github.io/game)
     */
    private readonly SAVE_KEY = "unique-key-for-your-game";

    constructor(features: Features) {
        this.features = features;

        this.state = GameState.Launching;
    }


    /**
     * Update all features
     */
    public update(): void {
        if (this.state != GameState.Playing) {
            return;
        }

        for (const feature of this.featureList) {
            feature.update(this.TICK_DURATION)
        }
    }

    public getTotalCurrencyMultiplier(type: CurrencyType): number {
        let multiplier = 1;
        for (const feature of this.featureList) {
            multiplier *= feature.getTotalCurrencyMultiplier(type);
        }
        return multiplier;
    }

    /**
     * Initialize all features
     */
    public initialize(): void {
        for (const feature of this.featureList) {
            feature.initialize(this.features);
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

        for (const feature of this.featureList) {
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
        if (this.state === GameState.Stopped) {
            this.printStateWarning("Cannot stop the game if we're already stopped.");
            return;
        }
        clearInterval(this._tickInterval);

        for (const feature of this.featureList) {
            feature.stop();
        }

        this.state = GameState.Stopped;
        console.debug("Stopped");
    }

    /**
     * Recursively save all registered features
     */
    public save(): void {
        const res: Record<string, unknown> = {};
        for (const feature of this.featureList) {
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
        if (saveData == null) {
            return;
        }
        for (const feature of this.featureList) {
            const featureSaveData: Record<string, unknown> = saveData[feature.saveKey] as Record<string, unknown>;
            if (featureSaveData == null) {
                continue;
            }
            feature.load(featureSaveData);
        }
    }

    private printStateWarning(reason: string): void {
        console.warn(`Current state = ${this.state}.`, reason);
    }

    private get featureList(): Feature[] {
        return Object.values(this.features)
    }

}
