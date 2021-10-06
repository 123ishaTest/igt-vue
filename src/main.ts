import Vue from 'vue'
import VueApp from './VueApp.vue'
import {App} from "./App";

import Notifications from "vt-notifications";

import './VueFilters';

import "./index.css";

Vue.config.productionTip = false

Vue.use(Notifications);

declare global {
    interface Window {
        App: App;
    }
}


/**
 * Start the application when all html elements are loaded.
 */
window.onload = function () {
    App.start();

    // Expose the App class to the window (and the console)
    if (!App.inProduction && typeof window !== undefined) {
        console.log('Exposing App to console');
        window.App = App;
    }


    console.log("Launched");

    new Vue({
        render: h => h(VueApp),
    }).$mount('#app')


};


