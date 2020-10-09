<template>
  <div>
    <p>Statistics</p>
    <div v-for="stat in allStatistics" :key="stat.type">
      <p> {{ stat.description }}: {{ stat.value | twoDigits }}</p>
    </div>
  </div>
</template>

<script>
import {App} from "@/App.ts"

export default {
  name: "Statistics",

  data: function () {
    return {
      statistics: App.game.statistics,
    }
  },

  computed: {
    allStatistics() {
      return this.statistics.list
    },

  }
}
</script>

<style scoped>

</style>
