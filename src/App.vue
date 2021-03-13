<template>
  <div>
    <igt-notifications></igt-notifications>
    <igt-sidebar>

      <igt-tab name="Achievements" :selected="true">
        <igt-achievements :achievements-feature="game.features.achievements"></igt-achievements>
      </igt-tab>
      <igt-tab name="Wallet">
        <igt-wallet></igt-wallet>
      </igt-tab>
      <igt-tab name="Developer Panel">
        <igt-developer-panel v-if="showDevPanel"></igt-developer-panel>
      </igt-tab>
    </igt-sidebar>

  </div>

</template>

<script>
import {App} from "@/App.ts"
import IgtSidebar from "@/components/util/sidebar/igt-sidebar";
import IgtTab from "@/components/util/igt-tab";
import IgtAchievements from "@/components/igt-achievements";
import IgtWallet from "@/components/igt-wallet";
import IgtNotifications from "@/components/util/igt-notifications";
import IgtDeveloperPanel from "@/components/developer-panel/igt-developer-panel";

export default {
  components: {IgtDeveloperPanel, IgtNotifications, IgtWallet, IgtAchievements, IgtTab, IgtSidebar},
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
