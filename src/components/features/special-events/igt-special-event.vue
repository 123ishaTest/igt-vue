<template>
  <div class="bg-gray-600 p-4 m-2 shadow-lg text-white">
    <div class="flex flex-col">
      <div class="flex flex-row justify-start items-baseline">
        <span class="mr-4 font-semibold">{{ event.title }}</span>
        <span class="text-sm">{{ event.description }}</span>

      </div>
      <div class="flex flex-row justify-start">
        <span class="mr-12">{{ event.startTime | dateFormat }}</span>
        <span>{{ event.endTime | dateFormat }}</span>
      </div>
      <div class="flex flex-row">
        <span>{{ timerDescription }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {DateHelper, SpecialEvent, SpecialEventDateState} from "incremental-game-template";

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
      state: 'unknown'
    }
  },
  computed: {
    timerDescription() {
      switch (this.state) {
        case SpecialEventDateState.Before: {
          return `Starts in ${DateHelper.toTimeLeftString(this.startsIn)}`;
        }
        case SpecialEventDateState.During: {
          return `Ends in ${DateHelper.toTimeLeftString(this.endsIn)}`
        }
        case SpecialEventDateState.After: {
          return 'This event is over';
        }
        default:
          return 'Unknown';
      }
    },

  },
  methods: {
    updateValues() {
      const date = new Date();
      this.startsIn = +this.event.getTimeUntilStart(date);
      this.endsIn = +this.event.getTimeUntilEnd(date);
      this.state = this.event.getDateState(date);
    }
  },
  mounted() {
    setInterval(() => {
      this.updateValues()
    }, 1000);
    this.updateValues();
  }
}
</script>

<style scoped>

</style>
