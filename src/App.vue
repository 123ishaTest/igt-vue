<template>
  <div class="container">
    <igt-notifications></igt-notifications>
    <igt-achievements :achievements-feature="game.features.achievements"></igt-achievements>

    <igt-wallet></igt-wallet>
    <igt-developer-panel v-if="showDevPanel"></igt-developer-panel>

  </div>

</template>

<script>
import {App} from "@/App.ts"
import IgtWallet from "@/components/igt-wallet";
import IgtDeveloperPanel from "@/components/developer-panel/igt-developer-panel";
import IgtNotifications from "@/components/util/igt-notifications";
import IgtAchievements from "@/components/igt-achievements";

export default {
  components: {IgtAchievements, IgtDeveloperPanel, IgtNotifications, IgtWallet},
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
