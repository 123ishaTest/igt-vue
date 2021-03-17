<template>
  <div class="w-36 h-36 b-2 bg-gray-500 m-2 p-2 border-gray-300 border-4">
    <div class="flex flex-col">
      <div>{{ inventoryItem.item.name }}</div>
      <div>{{ inventoryItem.amount }} / {{ inventoryItem.item.maxStack }}</div>
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
  },

}
</script>

<style scoped>

</style>
