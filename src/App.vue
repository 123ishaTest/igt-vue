<template>
  <div class="container">

    <p>GameState: {{state}}</p>

    <div class="flex flex-row">
    <button class="btn btn-green" @click="start">Start</button>
    <button class="btn btn-blue" @click="pause">Pause</button>
    <button class="btn btn-green" @click="resume">Resume</button>
    <button class="btn btn-red" @click="stop">Stop</button>
    </div>
    <igt-wallet></igt-wallet>

    <igt-developer-panel></igt-developer-panel>

  </div>

</template>

<script>
import {App} from "@/App.ts"
import IgtWallet from "@/components/igt-wallet";
import IgtDeveloperPanel from "@/components/developer-panel/igt-developer-panel";

export default {
  components: {IgtDeveloperPanel, IgtWallet},
  data() {
    return {
      game: App.game
    }
  },

  methods: {
    pause() {
      this.game.pause();
    },
    start() {
      this.game.start();
    },
    resume() {
      this.game.resume();
    },
    stop() {
      this.game.stop();
    },
  },
  computed: {
    state() {
      return this.game.state;
    }
  }
}
</script>

<style>
</style>
