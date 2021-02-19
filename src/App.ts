import {Game} from "./ig-template/Game";
import {Wallet} from "@/ig-template/features/wallet/Wallet";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {Settings} from "@/ig-template/features/settings/Settings";

export class App {

    static game: Game;

    static start(): void {

        this.game = this.getDefaultGame();
        this.game.initialize();
        this.game.load();
        this.game.start();
    }


    public static getDefaultGame(): Game {
        return new Game(
            {
                wallet: new Wallet([CurrencyType.Money, CurrencyType.Secondary]),
                settings: new Settings(),
            }
        );
    }
}
