<template>
  <igt-feature>
    <p>Active Events</p>
    <div class="flex flex-col">
      <igt-special-event v-for="event in activeEvents" :key="event.id" :event="event"></igt-special-event>
      <div v-if="activeEvents.length === 0">
        <p class="p-2 text-sm">There are no active events.</p>
      </div>
    </div>
    <br>
    <p>Other Events</p>
    <div class="flex flex-col">
      <igt-special-event v-for="event in futureEvents" :key="event.id" :event="event"></igt-special-event>
    </div>

  </igt-feature>
</template>
<script>
import IgtFeature from "@/components/util/igt-feature";
import IgtSpecialEvent from "@/components/features/special-events/igt-special-event";
import {IgtSpecialEvents} from "incremental-game-template";

export default {
  name: "igt-special-events",
  components: {IgtSpecialEvent, IgtFeature},
  props: {
    specialEventsFeature: {
      type: IgtSpecialEvents,
      required: true
    },
  },
  computed: {
    futureEvents() {
      const events = this.specialEventsFeature.events.filter(specialEvent => {
        return !specialEvent.isActive;
      })
      return [...events].sort((a, b) => {
        return a.startTime - b.startTime;
      });
    },
    activeEvents() {
      return this.specialEventsFeature.events.filter(specialEvent => {
        return specialEvent.isActive;
      })
    }
  },
  mounted() {
    this.specialEventsFeature.onEventStart.subscribe((event) => {
      this.$notify(
          {
            title: `Event started: ${event.title}`,
            text: event.description,
            type: "success",
            group: "top-left",
          },
          10000
      );
    });
    this.specialEventsFeature.onEventEnd.subscribe((event) => {
      this.$notify(
          {
            title: `Event ended: ${event.title}`,
            text: event.description,
            type: "error",
            group: "top-left",
          },
          10000
      );
    });
  }
}
</script>

<style scoped>

</style>
