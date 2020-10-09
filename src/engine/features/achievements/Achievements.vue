<template>
  <div>
    <p>Achievements</p>
    <div v-for="achievement in allAchievements" :key="achievement.type">
      <p> {{ achievement.description }} Unlocked: {{ achievement.unlocked }}</p>
    </div>
  </div>
</template>

<script>
import {App} from "@/App.ts"

export default {
  name: "Achievements",

  data: function () {
    return {
      achievements: App.game.achievements,
    }
  },

  computed: {
    allAchievements() {
      return this.achievements.list
    },

  },

  mounted() {
    for (const key in this.achievements.list) {
      const achievement = this.achievements.list[key];
      achievement.onUnlock.subscribe(() => console.log(`You unlocked achievement ${achievement.title}. Look at you go`))
    }
  }
}
</script>

<style scoped>

</style>
