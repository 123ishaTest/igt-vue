<template>
  <igt-feature container-class="bg-gray-300">
    <p>Example feature</p>
    <p>You have {{example._wallet.money | numberFormat}} Money</p>
    <p>You are gaining {{ moneyPerSecond }} Money per second</p>
    <igt-upgrade :upgrade="moneyUpgrade1" @click.native="buyUpgrade(moneyUpgrade1)"
                 :can-buy="example.canAfford(moneyUpgrade1)"></igt-upgrade>
  </igt-feature>
</template>

<script>
import {App} from "@/App.ts"
import IgtFeature from "@/components/util/igt-feature";
import IgtUpgrade from "@/components/tools/igt-discrete-upgrade";
import {UpgradeId} from "@/ig-template/tools/upgrades/UpgradeId";

export default {
  name: "igt-example-feature",
  components: {IgtUpgrade, IgtFeature},
  data() {
    return {
      example: App.game.features.example,
    }
  },
  methods: {
    buyUpgrade(id) {
      const bought = this.example.buyUpgrade(id);
      console.log(bought)
    }
  },
  computed: {
    moneyUpgrade1() {
      return this.example.getUpgrade(UpgradeId.MoneyUpgrade1);
    },
    moneyPerSecond() {
      return this.example.moneyPerSecond();
    }
  },


}
</script>

<style scoped>

</style>
