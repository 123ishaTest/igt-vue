import {App} from "@/App";
import VueApp from "@/VueApp.vue";

import '@/VueFilters';
import {mount} from "@vue/test-utils";

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
        }).not.toThrow();
    });
});
