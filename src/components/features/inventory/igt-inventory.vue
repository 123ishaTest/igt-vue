<template>
  <igt-feature>
    <button class="btn btn-blue" @click="gainItem">Gain a money pouch</button>
    <div class="flex flex-row flex-wrap">
      <div v-for="(inventoryItem, index) in inventoryItems" :key="index + '-'">
        <igt-inventory-slot :inventory-item="inventoryItem"></igt-inventory-slot>
      </div>
    </div>
  </igt-feature>
</template>

<script>
import {App} from "@/App.ts"
import IgtFeature from "@/components/util/igt-feature";
import IgtInventorySlot from "@/components/features/inventory/igt-inventory-slot";

export default {
  name: "igt-inventory",
  components: {IgtInventorySlot, IgtFeature},
  data() {
    return {
      inventory: App.game.features.inventory,
      itemList: App.game.features.itemList,
    }
  },
  computed: {
    inventoryItems() {
      return this.inventory.inventoryItems;
    }
  },

  methods: {
    gainItem() {
      this.inventory.gainItem(this.itemList.moneyPouch);
    }
  },
}
</script>

<style scoped>

</style>
