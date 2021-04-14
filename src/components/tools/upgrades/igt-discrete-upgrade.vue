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
import IgtCurrency from "@/components/features/wallet/igt-currency";
import {IgtAbstractUpgrade} from "incremental-game-template";

export default {
  name: "igt-upgrade",
  components: {IgtCurrency},
  props: {
    upgrade: {
      type: IgtAbstractUpgrade,
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
