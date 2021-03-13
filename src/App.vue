<template>
  <div>
    <igt-notifications></igt-notifications>
    <igt-sidebar>

      <igt-sidebar-category name="Features"></igt-sidebar-category>

      <igt-tab name="Wallet">
        <igt-wallet></igt-wallet>
      </igt-tab>

      <igt-tab name="Achievements" :selected="true">
        <igt-achievements :achievements-feature="game.features.achievements"></igt-achievements>
      </igt-tab>

      <igt-tab name="Settings">
        <igt-settings></igt-settings>
      </igt-tab>

      <igt-sidebar-category name="Other"></igt-sidebar-category>

      <igt-tab name="Developer Panel">
        <igt-developer-panel v-if="showDevPanel"></igt-developer-panel>
      </igt-tab>

      <igt-sidebar-category name="Socials"></igt-sidebar-category>
      <igt-sidebar-external-link name="Discord" link="https://discord.gg/WUYDqct2Ef"
                                 image="socials/discord.png"></igt-sidebar-external-link>
      <igt-sidebar-external-link name="Documentation"
                                 link="https://123ishatest.github.io/incremental-game-template-website/"
                                 image="socials/docusaurus.svg"></igt-sidebar-external-link>
      <igt-sidebar-external-link name="GitHub" link="https://github.com/123ishaTest/incremental-game-template"
                                 image="socials/github.png"></igt-sidebar-external-link>
    </igt-sidebar>

  </div>

</template>

<script>
import {App} from "@/App.ts"
import IgtSidebar from "@/components/util/sidebar/igt-sidebar-layout";
import IgtTab from "@/components/util/igt-tab";
import IgtAchievements from "@/components/features/achievements/igt-achievements";
import IgtWallet from "@/components/features/wallet/igt-wallet";
import IgtNotifications from "@/components/util/igt-notifications";
import IgtDeveloperPanel from "@/components/developer-panel/igt-developer-panel";
import IgtSidebarCategory from "@/components/util/sidebar/igt-sidebar-category";
import IgtSidebarExternalLink from "@/components/util/sidebar/igt-sidebar-external-link";
import IgtSettings from "@/components/features/settings/igt-settings";

export default {
  components: {
    IgtSettings,
    IgtSidebarExternalLink,
    IgtSidebarCategory, IgtDeveloperPanel, IgtNotifications, IgtWallet, IgtAchievements, IgtTab, IgtSidebar
  },
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
