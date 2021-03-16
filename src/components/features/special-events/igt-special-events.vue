<template>
  <igt-feature>
    <p>Active Events</p>
    <div class="flex flex-col">
      <igt-special-event v-for="event in activeEvents" :key="event.id" :event="event"></igt-special-event>
      <div v-if="activeEvents.length === 0">
        <p>There are no active events.</p>
      </div>
    </div>

    <p>All Events</p>
    <div class="flex flex-col">
      <igt-special-event v-for="event in events" :key="event.id" :event="event"></igt-special-event>
    </div>


  </igt-feature>
</template>
<script>
import {App} from "@/App.ts";
import IgtFeature from "@/components/util/igt-feature";
import IgtSpecialEvent from "@/components/features/special-events/igt-special-event";

export default {
  name: "igt-special-events",
  components: {IgtSpecialEvent, IgtFeature},
  data() {
    return {
      eventsFeature: App.game.features.specialEvents,
    }
  },
  computed: {
    events() {
      return [...this.eventsFeature.events].sort((a, b) => {
        return a.startTime - b.startTime;
      });
    },
    activeEvents() {
      return this.eventsFeature.events.filter(specialEvent => {
        return specialEvent.isActive;
      })
    }
  },
  mounted() {
    this.eventsFeature.onEventStart.subscribe((event) => {
      this.$notify(
          {
            title: `Event started: ${event.title}`,
            text: event.description,
            type: "success",
            group: "top-left",
          },
          20000
      );
    });
    this.eventsFeature.onEventEnd.subscribe((event) => {
      this.$notify(
          {
            title: `Event ended: ${event.title}`,
            text: event.description,
            type: "warning",
            group: "top-left",
          },
          20000
      );
    });
  }
}
</script>

<style scoped>

</style>
