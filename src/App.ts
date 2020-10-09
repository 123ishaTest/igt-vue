import {Example} from "./game/features/example/Example";
import {Game} from "./game/Game";
import {Wallet} from "./engine/features/wallet/Wallet";
import {Settings} from "@/engine/features/settings/Settings";
import {Statistics} from "@/engine/features/statistics/Statistics";
import {Achievements} from "@/engine/features/achievements/Achievements";

export class App {

    static readonly debug = false;
    static game: Game;



    static start(): void {
        this.game = this.createNewGame()
        this.game.initialize();
        this.game.load();
        this.game.start();
    }

    static createNewGame(): Game {
        return new Game(
            new Example(),
            new Wallet(),
            new Settings(),
            new Statistics(),
            new Achievements(),
        );
    }
}
