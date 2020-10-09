<template>
  <div class="container">

    <wallet></wallet>
    <example></example>
    <settings></settings>
    <statistics></statistics>
    <achievements></achievements>
  </div>
</template>

<script>
import Wallet from "@/engine/features/wallet/Wallet.vue";
import Example from "@/game/features/example/Example.vue";
import Settings from "@/engine/features/settings/Settings.vue";
import Statistics from "@/engine/features/statistics/Statistics.vue";
import Achievements from "@/engine/features/achievements/Achievements.vue";

export default {

  components: {
    'statistics': Statistics,
    'settings': Settings,
    'example': Example,
    'wallet': Wallet,
    'achievements': Achievements,
  },

  methods: {}
}
</script>

<style>
</style>
