<template>
  <div class="bg-gray-500 flex flex-col p-2 space-y-2 w-96">
    <div v-if="hasAlways" class="flex flex-col">
      <p class="font-semibold">Always</p>
      <hr>
      <igt-loot-entry v-for="(entry, index) in table.always" :key="index" :entry="entry"></igt-loot-entry>
    </div>
    <div v-if="hasOneOf" class="flex flex-col">
      <p class="font-semibold">One of</p>
      <hr>
      <igt-loot-entry v-for="(entry, index) in table.oneOf" :key="index" :entry="entry"></igt-loot-entry>
    </div>
    <div v-if="hasAnyOf" class="flex flex-col">
      <p class="font-semibold">Any of</p>
      <hr>
      <igt-loot-entry v-for="(entry, index) in table.anyOf" :key="index" :entry="entry" :show-weight-as-percentage="true"></igt-loot-entry>
    </div>
  </div>
</template>

<script>
import IgtLootEntry from "@/components/features/loot-tables/igt-loot-entry";
import {LootTable} from "incremental-game-template";

export default {
  name: "igt-loot-table",
  components: {IgtLootEntry},
  props: {
    table: {
      type: LootTable,
      required: true,
    },
  },
  methods: {
    hasAnyOf() {
      return this.table.anyOf.length > 0;
    },
    hasOneOf() {
      return this.table.oneOf.length > 0;
    },
    hasAlways() {
      return this.table.always.length > 0;
    },
  },
}
</script>

<style scoped>
</style>
