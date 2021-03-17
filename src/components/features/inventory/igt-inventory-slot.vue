<template>
  <div class="w-36 h-36 b-2 bg-gray-500 m-2 p-2 border-gray-300 border-4 has-tooltip"
       :class="{'border-red-400': isSelected}">
    <div v-if="!inventoryItem.isEmpty()">
      <div class="tooltip bg-gray-900 p-2 ml-24">{{ inventoryItem.item.description }}</div>
      <div class="flex flex-col">
        <div>{{ inventoryItem.item.name }}</div>
        <div>{{ inventoryItem.amount }} / {{ inventoryItem.item.maxStack }}</div>
      </div>
    </div>
  </div>
</template>

<script>

import {InventoryItem} from "@/ig-template/features/inventory/InventoryItem";

export default {
  name: "igt-inventory-slot",

  props: {
    inventoryItem: {
      type: InventoryItem,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: true,
    }
  },

}
</script>

<style scoped>

</style>
