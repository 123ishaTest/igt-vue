<template>
  <div class="m-4 p-4 bg-green-700 shadow-xl">
    <p class="text-2xl font-semibold text-white">Achievements</p>
    <hr/>
    <div class="flex flex-row flex-wrap">
      <div :key=achievement.id v-for="achievement in achievements" class="w-72">
        <div class="flex flex-col border-2 m-2 p-2 h-72 justify-between shadow-md"
             :class="{'bg-gray-400': !achievement.unlocked, 'bg-green-500': achievement.unlocked}">
          <div>
            <p class="text-lg font-semibold"> {{ achievement.unlocked ? achievement.title : '???' }}</p>
            <hr>
            <br>
            <p v-if="achievement.isHidden && !achievement.unlocked" class="italic"> Hidden achievement </p>
            <p v-else class="italic"> {{ achievement.description }}</p>
          </div>
          <img v-if="achievement.image" class="w-28 h-28 mx-auto m-2;"
               :class="{'filter-grayscale': !achievement.unlocked}"
               :src="require(`@/assets/${achievement.image}`)" :alt="achievement.image">
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import {Achievements} from "@/ig-template/features/achievements/Achievements";

export default {
  name: "igt-achievements",
  props: {
    achievementsFeature: {
      type: Achievements,
      required: true,
    },
  },

  computed: {
    achievements() {
      return this.achievementsFeature.list;
    }
  },

  mounted() {
    this.achievementsFeature.onUnlock.subscribe((achievement) => {
      this.$notify(
          {
            title: achievement.title,
            text: achievement.description,
            type: "success",
            group: "top-left",
          },
          4000
      );
    })
  }
}
</script>

<style scoped>

</style>
