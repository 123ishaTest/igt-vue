<template>
  <div class="container">

    <igt-wallet></igt-wallet>
    <igt-developer-panel v-if="showDevPanel"></igt-developer-panel>

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
  computed: {
    showDevPanel() {
      return !App.inProduction;
    }
  },
}
</script>

<style>
</style>
