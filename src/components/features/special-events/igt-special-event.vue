<template>
  <div class="bg-red-500 p-2 m-2">
    <div class="flex flex-col">
      <div>{{ event.title }}</div>
      <div class="flex flex-row justify-between">
        <span>{{ event.description }}</span>
        <span>{{ event.startTime | dateFormat }}</span>
        <span>{{ event.endTime | dateFormat }}</span>
        <span>{{ startsIn }}</span>
        <span>{{ endsIn }}</span>
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
  data() {
    return {
      startsIn: 0,
      endsIn: 0,
    }
  },

  mounted() {
    setInterval(() => {
      const date = new Date();
      this.startsIn = this.event.getTimeUntilStart(date);
      this.endsIn = this.event.getTimeUntilEnd(date);
    }, 1000);
  }
}
</script>

<style scoped>

</style>
