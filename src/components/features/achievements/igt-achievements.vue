<template>
  <igt-feature>
    <div class="flex flex-row flex-wrap justify-center sm:justify-start">
      <div :key=achievement.id v-for="achievement in achievements" class="w-64 sm:w-72">
        <div class="flex flex-col border-2 m-2 p-2 h-64 sm:h-72 justify-between shadow-md"
             :class="{'bg-gray-400': !achievement.unlocked, 'bg-green-500': achievement.unlocked}">
          <div>
            <p class="text-lg font-semibold"> {{ achievement.unlocked ? achievement.title : '???' }}</p>
            <hr>
            <br>
            <p v-if="achievement.isHidden && !achievement.unlocked" class="italic"> Hidden achievement </p>
            <p v-else class="italic"> {{ achievement.description }}</p>
          </div>
          <img v-if="achievement.image" class="w-20 h-20 sm:w-28 sm:h-28 mx-auto m-2;"
               :class="{'filter-grayscale': !achievement.unlocked}"
               :src="require(`@/assets/${achievement.image}`)" :alt="achievement.image">
        </div>
      </div>
    </div>
  </igt-feature>
</template>
<script>
import IgtFeature from "@/components/util/igt-feature";
import {IgtAchievements} from "incremental-game-template";

export default {
  name: "igt-achievements",
  components: {IgtFeature},
  props: {
    achievementsFeature: {
      type: IgtAchievements,
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
            title: `Achievement get: ${achievement.title}`,
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
