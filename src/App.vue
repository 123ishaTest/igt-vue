<template>
  <div class="container">

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
