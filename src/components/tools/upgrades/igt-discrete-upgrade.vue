<template>
  <button class="btn btn-blue" :disabled="!canBuy">
    <span class="flex flex-col">
      <span>{{ upgrade.displayName }}</span>
      <span>Lvl. {{ upgrade.level }} / {{ upgrade.maxLevel }}</span>
      <igt-currency v-if="!upgrade.isMaxLevel()" :show-image="true" :currency="upgrade.getCost()"></igt-currency>
      <span v-else>Max</span>
    </span>
  </button>
</template>

<script>


import {AbstractUpgrade} from "@/ig-template/tools/upgrades/AbstractUpgrade";
import IgtCurrency from "@/components/features/wallet/igt-currency";

export default {
  name: "igt-upgrade",
  components: {IgtCurrency},
  props: {
    upgrade: {
      type: AbstractUpgrade,
      required: true,
    },
    canBuy: {
      type: Boolean,
      required: true,
    }
  },

}
</script>

<style scoped>

</style>
