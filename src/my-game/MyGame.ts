import {IgtGame} from "incremental-game-template";
import {MyFeatures} from "@/my-game/MyFeatures";

export class MyGame extends IgtGame {
    // @TODO Update SAVE_KEY to something unique
    protected readonly SAVE_KEY: string = 'igt-vue';
    // @TODO Update TICK_DURATION to an appropriate value
    protected readonly TICK_DURATION: number = 0.01;
    features: MyFeatures;

    constructor(features: MyFeatures) {
        super();
        this.features = features;
    }
}
