<template>
  <igt-feature>
    <p>Example feature</p>
    <p>You have {{ example._wallet.money | numberFormat }} Money</p>
    <p>You are gaining {{ moneyPerSecond }} Money per second</p>
    <p>You have {{ singleLevelUpgrade.isBought() ? '' : 'not' }} bought the Single Level Upgrade</p>

    <button v-if="showEventButton" class="btn btn-blue" @click="eventButton">
      This button is managed by a Special Event.
    </button>
    <span v-if="example.weeklyEventActive">Weekly</span>

    <div class="flex flex-row flex-wrap justify-center sm:justify-start">
      <div v-for="upgrade in example.upgrades" :key="upgrade.id">
        <igt-upgrade :upgrade="upgrade" @click.native="buyUpgrade(upgrade)"
                     :can-buy="example.canAfford(upgrade)"></igt-upgrade>
      </div>
    </div>
    <igt-exp-level :exp-level="example.exampleSkill"></igt-exp-level>
  </igt-feature>
</template>

<script>
import {App} from "@/App.ts"
import IgtFeature from "@/components/util/igt-feature";
import IgtUpgrade from "@/components/tools/upgrades/igt-discrete-upgrade";
import {UpgradeId} from "@/ig-template/tools/upgrades/UpgradeId";
import IgtExpLevel from "@/components/tools/exp-level/igt-exp-level";

export default {
  name: "igt-example-feature",
  components: {IgtExpLevel, IgtUpgrade, IgtFeature},
  data() {
    return {
      example: App.game.features.example,
    }
  },
  methods: {
    buyUpgrade(id) {
      this.example.buyUpgrade(id);
    },
    eventButton() {
      alert("epic")
    }
  },
  computed: {
    singleLevelUpgrade() {
      return this.example.getUpgrade(UpgradeId.SingleLevel);
    },
    moneyPerSecond() {
      return this.example.moneyPerSecond();
    },
    showEventButton() {
      return this.example.showEventButton;
    }
  },


}
</script>

<style scoped>

</style>
