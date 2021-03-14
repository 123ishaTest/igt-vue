<template>
  <div class="flex">
    <div class="flex justify-center items-center w-12" :class="backgroundColor">
      <div class="text-xl fa" :class="icon"></div>
    </div>

    <div class="-mx-3 py-2 px-4">
      <div class="mx-3">
        <span class="font-semibold" :class="textColor">{{ notification.title }}</span>
        <p class="text-gray-600 text-sm">{{ notification.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "igt-notification",
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  computed: {
    textColor() {
      switch (this.notification.type) {
        case 'success':
          return 'text-green-500'
        case 'error':
          return 'text-red-500'
        default:
          return 'text-gray-500';
      }
    },
    backgroundColor() {
      switch (this.notification.type) {
        case 'success':
          return 'bg-green-500'
        case 'error':
          return 'bg-red-500'
        default:
          return 'bg-gray-500';
      }
    },
    icon() {
      switch (this.notification.type) {
        case 'success':
          return 'fa-check'
        case 'error':
          return 'fa-times'
        default:
          return 'fa-question';
      }
    }
  },
}
</script>

<style scoped>

</style>
