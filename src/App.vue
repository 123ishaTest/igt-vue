<template>
  <div :class="{'dark': darkMode}">
    <igt-notifications></igt-notifications>
    <igt-sidebar title="Incremental Game Template">

      <igt-sidebar-category name="Features"></igt-sidebar-category>

      <igt-tab name="Example">
        <igt-example-feature></igt-example-feature>
      </igt-tab>

      <igt-tab name="Inventory">
        <igt-inventory></igt-inventory>
      </igt-tab>

      <igt-tab name="Loot Tables" :selected="true">
        <igt-loot-tables></igt-loot-tables>
      </igt-tab>

      <igt-tab name="Wallet">
        <igt-wallet></igt-wallet>
      </igt-tab>

      <igt-tab name="Key Items">
        <igt-key-items></igt-key-items>
      </igt-tab>

      <igt-tab name="Special Events">
        <igt-special-events></igt-special-events>
      </igt-tab>

      <igt-tab name="Achievements">
        <igt-achievements :achievements-feature="game.features.achievements"></igt-achievements>
      </igt-tab>

      <igt-tab name="Redeemable Codes">
        <igt-redeemable-codes></igt-redeemable-codes>
      </igt-tab>

      <igt-tab name="Settings">
        <igt-settings></igt-settings>
      </igt-tab>

      <igt-sidebar-category name="Other"></igt-sidebar-category>

      <igt-tab name="Developer Panel" v-if="showDevPanel">
        <igt-developer-panel :developer-panel="game.getDeveloperPanel()"></igt-developer-panel>
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
import IgtRedeemableCodes from "@/components/features/codes/igt-redeemable-codes";
import IgtExampleFeature from "@/components/features/example/igt-example-feature";
import IgtSpecialEvents from "@/components/features/special-events/igt-special-events";
import IgtInventory from "@/components/features/inventory/igt-inventory";
import IgtKeyItems from "@/components/features/key-items/igt-key-items";
import IgtLootTables from "@/components/features/loot-tables/igt-loot-tables";

export default {
  components: {
    IgtLootTables,
    IgtKeyItems,
    IgtInventory,
    IgtSpecialEvents,
    IgtExampleFeature,
    IgtRedeemableCodes,
    IgtSettings,
    IgtSidebarExternalLink,
    IgtSidebarCategory,
    IgtDeveloperPanel,
    IgtNotifications,
    IgtWallet,
    IgtAchievements,
    IgtTab,
    IgtSidebar
  },
  data() {
    return {
      game: App.game
    }
  },
  computed: {
    showDevPanel() {
      return !App.inProduction;
    },
    darkMode() {
      return App.game.features.settings.darkMode.value;
    }
  },
}
</script>

<style>
</style>
