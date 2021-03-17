<template>
  <div class="bg-gray-500 flex flex-col p-4">
    <div>
      {{ selectedItem.name }}
    </div>
    <div>{{ selectedItem.description }}</div>
    <div class="flex flex-row items-center">
      <button v-if="isConsumable" class="btn btn-blue" @click="$emit('consume')">{{ selectedItem.label }}</button>
      <button class="btn btn-red" @click="$emit('drop')">Drop</button>
    </div>
  </div>
</template>

<script>

import {InventoryItem} from "@/ig-template/features/inventory/InventoryItem";
import {AbstractConsumable} from "@/ig-template/features/items/Consumable";

export default {
  name: "igt-inventory-item-highlight",
  props: {
    selectedInventoryItem: {
      type: InventoryItem,
      required: true,
    },
  },

  computed: {
    selectedItem() {
      return this.selectedInventoryItem.item;
    },
    isConsumable() {
      return this.selectedItem instanceof AbstractConsumable;
    },
    canConsume() {
      if (!this.isConsumable) {
        return false;
      }
      return this.selectedItem.canConsume();
    }
  },

}
</script>

<style scoped>

</style>
