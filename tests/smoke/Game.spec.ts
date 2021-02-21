import {App} from "@/App.ts";
import VueApp from "@/App.vue";

import '@/VueFilters';
import {mount} from "@vue/test-utils";
import {Currency} from "@/ig-template/features/wallet/Currency";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";

/**
 * This smoke test starts the game and runs 100 game ticks.
 * It will also mount the Vue instance.
 * It fails if any exceptions are thrown.
 */
describe('Game launch smoke test', () => {

    test('smoke test', () => {
        expect(() => {
            App.start()

            mount(VueApp);

            for (let i = 0; i < 100; i++) {
                App.game.update();
            }
            App.game.features.wallet.gainCurrency(new Currency(10, CurrencyType.Money))
        }).not.toThrow();
    });
});
