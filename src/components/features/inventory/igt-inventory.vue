<template>
  <igt-feature>
    <div class="flex flex-row flex-wrap justify-center">
    </div>

    <div class="flex flex-row flex-wrap justify-center sm:justify-start">
      <div v-for="(slot, index) in slots" :key="index + '-' + slot.item.id">
        <igt-inventory-slot :inventorySlot="slot"
                            :is-selected="index === selectedIndex"
                            :index="index"
                            @interact="interact"
                            @click.native="selectItem(index)"
        ></igt-inventory-slot>
      </div>
    </div>

    <igt-inventory-slot-highlight
        v-if="showHighlight"
        :selected-inventory-slot="selectedSlot"
        @consume="consumeItem"
        @drop="dropStack"
    ></igt-inventory-slot-highlight>
  </igt-feature>
</template>

<script>
import IgtFeature from "@/components/util/igt-feature";
import IgtInventorySlot from "@/components/features/inventory/igt-inventory-slot";
import IgtInventorySlotHighlight from "@/components/features/inventory/igt-inventory-slot-highlight";
import {IgtInventory} from "incremental-game-template";

export default {
  name: "igt-inventory",
  components: {
    IgtInventorySlotHighlight,
    IgtInventorySlot,
    IgtFeature
  },
  props: {
    inventoryFeature: {
      type: IgtInventory,
      required: true,
    },
  },
  data() {
    return {
      selectedIndex: -1,
    }
  },
  computed: {
    slots() {
      return this.inventory.slots;
    },
    selectedSlot() {
      return this.slots[this.selectedIndex];
    },
    showHighlight() {
      return this.selectedSlot && !this.selectedSlot.isEmpty();
    }
  },

  methods: {
    interact(data) {
      this.inventory.interactIndices(data.from, data.to)
      this.selectedIndex = data.to
    },
    consumeItem(data) {
      this.inventory.consumeItem(this.selectedIndex, data.amount)
    },
    dropStack() {
      this.inventory.dropStack(this.selectedIndex)
    },
    selectItem(index) {
      this.selectedIndex = index;
    },
  },
}
</script>

<style scoped>

</style>
