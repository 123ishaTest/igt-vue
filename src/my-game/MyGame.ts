import {IgtGame} from "incremental-game-template";
import {MyFeatures} from "@/my-game/MyFeatures";

export class MyGame extends IgtGame {
    protected readonly SAVE_KEY: string = '123ishaTest/igt-demo';
    protected readonly TICK_DURATION: number = 0.1;
    features: MyFeatures;

    constructor(features: MyFeatures) {
        super();
        this.features = features;
    }
}
