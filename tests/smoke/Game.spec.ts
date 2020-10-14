import {Game} from "@/ig-template/Game";
import {Wallet} from "@/ig-template/features/wallet/Wallet";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {Settings} from "@/ig-template/features/settings/Settings";


/**
 * This smoke test simply starts the game and runs 100 game ticks.
 * It fails if any exceptions are thrown.
 */
describe('Game launch smoke test', () => {

    test('smoke test', () => {
        expect(() => {
            const game = new Game(
                {
                    wallet: new Wallet([CurrencyType.Money, CurrencyType.Secondary]),
                    settings: new Settings(),
                }
            );
            game.initialize();
            game.start();
            for (let i = 0; i < 100; i++) {
                game.update();
            }
        }).not.toThrow();
    });
});
