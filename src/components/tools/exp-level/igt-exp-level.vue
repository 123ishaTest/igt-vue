<template>
  <div>

    <div class="relative pt-1">
      <div class="flex justify-between">
        <p>Lvl. {{ expLevel.getLevel() }} / {{ expLevel.maxLevel }}</p>
        <p>{{ progress.actual | numberFormat }} / {{ progress.target  | numberFormat }}</p>

      </div>
      <igt-progress-bar :percentage="progressPercentage"></igt-progress-bar>

    </div>
  </div>
</template>

<script>


import {AbstractExpLevel} from "@/ig-template/tools/exp-level/AbstractExpLevel";
import IgtProgressBar from "@/components/util/igt-progress-bar";

export default {
  name: "igt-exp-level",
  components: {IgtProgressBar},
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
