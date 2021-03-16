<template>
  <div class="bg-red-500 p-2 m-2">
    <div class="flex flex-col">
      <div>{{ event.title }}</div>
      <div class="flex flex-row justify-between">
        <span>{{ event.description }}</span>
        <span>{{ event.startTime | dateFormat }}</span>
        <span>{{ event.endTime | dateFormat }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {SpecialEvent} from "@/ig-template/features/special-events/SpecialEvent";

export default {
  name: "igt-special-event",
  props: {
    event: {
      type: SpecialEvent,
      required: true,
    },
  },
  methods: {
    startsIn() {
      return Math.max(0, new Date() - this.event.startTime);
    }
  },
}
</script>

<style scoped>

</style>
