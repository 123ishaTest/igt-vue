<template>
  <div class="feature-tab" :class="containerClass">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "igt-feature",
  props: {
    containerClass: {
      type: String,
      default: 'bg-gray-200 dark:bg-gray-700'
    },
  },
}
</script>

<style scoped>

</style>
