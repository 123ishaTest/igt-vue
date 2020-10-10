<template>
  <div class="container">

    <p>GameState: {{state}}</p>

    <button @click="start">Start</button>
    <button @click="pause">Pause</button>
    <button @click="resume">Resume</button>
    <button @click="stop">Stop</button>

    <igt-wallet></igt-wallet>
  </div>
</template>

<script>
import {App} from "@/App.ts"
import IgtWallet from "@/components/igt-wallet";

export default {
  components: {IgtWallet},
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
