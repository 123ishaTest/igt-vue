<template>
  <button class="btn btn-blue" :disabled="!canBuy">
    <div class="flex flex-col">
      <span>{{ upgrade.displayName }}</span>
      <span>Lvl. {{ upgrade.level }} / {{ upgrade.maxLevel }}</span>
      <span>{{ upgrade.getCost() }}</span>
    </div>
  </button>
</template>

<script>

import {DiscreteUpgrade} from "@/ig-template/tools/upgrades/DiscreteUpgrade";

export default {
  name: "igt-upgrade",
  props: {
    upgrade: {
      type: DiscreteUpgrade,
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
