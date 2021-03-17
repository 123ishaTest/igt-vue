<template>
  <div class="w-36 h-36 b-2 bg-gray-500 m-2 p-2 border-gray-300 border-4 has-tooltip"
       draggable="true"
       @dragstart="startDrag($event,index)"
       @drop="onDrop($event, index)"
       @dragover.prevent
       @dragenter.prevent

       :class="{'border-red-400': isSelected}">
    <div v-if="!inventoryItem.isEmpty()">
      <div class="tooltip bg-gray-900 p-2 ml-24">{{ inventoryItem.item.description }}</div>
      <div class="flex flex-col">
        <div>{{ index }}</div>
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
    },
    index: {
      type: Number,
      required: true,
    }
  },
  computed: {
    canDrag() {
      return !this.inventoryItem.isEmpty();
    }
  },
  methods: {
    startDrag(evt, index) {
      if (!this.canDrag) {
        evt.preventDefault();
        return;
      }
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('index', index);
    },
    onDrop(evt, indexTo) {
      console.log("drop")
      const indexFrom = parseInt(evt.dataTransfer.getData('index'));
      this.$emit('interact', {'from': indexFrom, 'to': indexTo})
    }
  },

}
</script>

<style scoped>

</style>
