<template>
  <div v-show="isActive">
  </div>
</template>

<script>

export default {
  name: "igt-sidebar-external-link",
  props: {
    name: {required: true},
    link: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    }
  },

  data() {
    return {
      isExternalLink: true,
      isActive: false
    };
  },

}
</script>

<style scoped>

</style>
