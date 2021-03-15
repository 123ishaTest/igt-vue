<template>
  <div class="overflow-hidden h-2 mb-4 text-xs flex rounded" :class="bgClass">
    <div :style="{'width' : percentage * 100 + '%'}"
         class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
         :class="fgClass"></div>
  </div>
</template>

<script>

export default {
  name: "igt-progress-bar",
  props: {
    percentage: {
      type: Number,
      required: true,
    },
    bgClass: {
      type: String,
      default: 'bg-pink-200'
    },
    fgClass: {
      type: String,
      default: 'bg-pink-500'
    },
  },
}
</script>

<style scoped>

</style>
