<template>
  <div v-show="isActive">
  </div>
</template>

<script>

export default {
  name: "igt-sidebar-category",
  props: {
    name: {required: true},
    selected: {default: false}
  },

  data() {
    return {
      isCategory: true,
      isActive: false
    };
  },

}
</script>

<style scoped>

</style>
