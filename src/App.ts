import {Game} from "./ig-template/Game";
import {Wallet} from "@/ig-template/features/wallet/Wallet";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";

export class App {

    static game: Game;

    static start(): void {

        this.game = new Game(
            new Wallet([CurrencyType.Money, CurrencyType.Secondary]),
        );
        this.game.initialize();
        this.game.load();
        this.game.start();
    }


}
