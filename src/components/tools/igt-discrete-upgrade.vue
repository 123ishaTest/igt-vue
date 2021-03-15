<template>
  <button class="btn btn-blue" :disabled="!canBuy">
    <span class="flex flex-col">
      <span>{{ upgrade.displayName }}</span>
      <span>Lvl. {{ upgrade.level }} / {{ upgrade.maxLevel }}</span>
      <span v-if="!upgrade.isMaxLevel()">{{ upgrade.getCost() }}</span>
      <span v-else>Max</span>
    </span>
  </button>
</template>

<script>


import {AbstractUpgrade} from "@/ig-template/tools/upgrades/AbstractUpgrade";

export default {
  name: "igt-upgrade",
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
