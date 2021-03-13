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
      default: ''
    },
  },
}
</script>

<style scoped>

</style>
