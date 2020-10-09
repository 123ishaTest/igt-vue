<template>
  <div>
    <p>Gains {{ bonus }}</p>
    <upgrade v-for="upgrade in example.upgrades.list" :upgrade="upgrade" :key="upgrade.identifier"></upgrade>
    <p> {{isCompleted}}</p>
  </div>
</template>

<script>
import Upgrade from "@/engine/upgrades/Upgrade.vue";
import {App} from "@/App.ts";
import {UpgradeType} from "@/engine/upgrades/UpgradeType.ts";
import {StatisticType} from "@/engine/features/statistics/StatisticType";

export default {
  name: "Example",
  components: {
    'upgrade': Upgrade
  },

  data: function () {
    return {
      moneyStatistic: App.game.statistics.getStatistic(StatisticType.TotalMoneyGained),
      example: App.game.example,
    }
  },

  computed: {
    bonus() {
      return this.example.upgrades.getTotalMultiplierForType(UpgradeType.Money)
    },

    isCompleted() {
      return this.example.requirement.isCompleted();
    }
  }
}
</script>

<style scoped>
</style>
