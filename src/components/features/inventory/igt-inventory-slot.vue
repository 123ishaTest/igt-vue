<template>
  <div class="w-24 h-24 lg:w-36 lg:h-36 b-2 bg-gray-500 m-2 p-2 border-gray-300 border-4 text-white text-sm lg:text-xl"
       draggable="true"
       @dragstart="startDrag($event,index)"
       @drop="onDrop($event, index)"
       @dragover.prevent
       @dragenter.prevent
       :class="{'border-red-400': isSelected}">
    <div v-if="!inventorySlot.isEmpty()">
      <div class="flex flex-col">
        <div>{{ inventorySlot.item.name }}</div>
        <div>{{ inventorySlot.amount }} / {{ inventorySlot.item.maxStack }}</div>
      </div>
    </div>
  </div>
</template>

<script>

import {InventorySlot} from "incremental-game-template";

export default {
  name: "igt-inventory-slot",

  props: {
    inventorySlot: {
      type: InventorySlot,
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
      return !this.inventorySlot.isEmpty();
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
      const indexFrom = parseInt(evt.dataTransfer.getData('index'));
      this.$emit('interact', {'from': indexFrom, 'to': indexTo})
    }
  },

}
</script>

<style scoped>

</style>
