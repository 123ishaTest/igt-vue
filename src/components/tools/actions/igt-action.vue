<template>
  <div class="p-4 bg-green-500 w-72 h-24 border-green-700 border-4 shadow-lg hover-highlight flex flex-row items-center"
       @click="action.toggle()">
    <div class="flex flex-col w-full">
      <p class="text-center text-white">{{ action.description }}</p>
      <igt-progress-bar :percentage="progressPercentage"></igt-progress-bar>
    </div>
  </div>
</template>

<script>


import IgtProgressBar from "@/components/util/igt-progress-bar";
import {AbstractAction} from "@/ig-template/tools/actions/AbstractAction";

export default {
  name: "igt-action",
  components: {IgtProgressBar},
  props: {
    action: {
      type: AbstractAction,
      required: true,
    },
  },
  computed: {
    progress() {
      return this.action.getProgress();
    },
    progressPercentage() {
      return this.progress.getPercentage();
    }
  },

}
</script>

<style scoped>

</style>
