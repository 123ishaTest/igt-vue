import {Game} from "./ig-template/Game";
import {Wallet} from "@/ig-template/features/wallet/Wallet";

export class App {

    static game: Game;

    static start(): void {
        this.game = new Game(new Wallet());
        this.game.initialize();
        this.game.load();
        this.game.start();
    }


}
