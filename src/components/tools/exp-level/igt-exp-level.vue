<template>
  <div>

    <div class="relative pt-1">
      <div class="flex justify-between">
      <p>Lvl. {{ expLevel.getLevel() }} / {{ expLevel.maxLevel }}</p>
      <p>{{ progress.actual | numberFormat }} / {{ progress.target  | numberFormat }}</p>

      </div>
      <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
        <div :style="{'width' : progressPercentage * 100 + '%'}"
             class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
      </div>

    </div>
  </div>
</template>

<script>


import {AbstractExpLevel} from "@/ig-template/tools/exp-level/AbstractExpLevel";

export default {
  name: "igt-exp-level",
  props: {
    expLevel: {
      type: AbstractExpLevel,
      required: true,
    },
  },
  computed: {
    progress() {
      return this.expLevel.getLevelProgress();
    },
    progressPercentage() {
      return this.progress.getPercentage();
    }
  },

}
</script>

<style scoped>

</style>
