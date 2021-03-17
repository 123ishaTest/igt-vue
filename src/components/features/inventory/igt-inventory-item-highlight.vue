<template>
  <div class="h-24 bg-gray-500 flex flex-row items-center p-2">
    {{ selectedItem.name }}
    <button v-if="isConsumable" class="btn btn-blue" @click="consume">{{ selectedItem.label }}</button>

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

  methods: {
    consume() {
      this.$emit('consume')
    }
  },

}
</script>

<style scoped>

</style>
