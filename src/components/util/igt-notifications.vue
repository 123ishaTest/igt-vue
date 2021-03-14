<template>
  <notificationGroup group="top-left">
    <div
        class="z-50 fixed inset-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-start"
    >
      <div class="max-w-sm w-full">
        <notification v-slot="{notifications}">
          <div
              class="max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4"
              v-for="notification in notifications"
              :key="notification.id"
          >
            <igt-notification :notification="notification"></igt-notification>
          </div>
        </notification>
      </div>
    </div>
  </notificationGroup>
</template>

<script>

import IgtNotification from "@/components/util/igt-notification";

export default {
  name: "igt-notifications",
  components: {IgtNotification},
}
</script>

<style scoped>

</style>
