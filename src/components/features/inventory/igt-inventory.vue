<template>
  <igt-feature>
    <button class="btn btn-blue" @click="gainItem">Gain a money pouch</button>
    <div class="flex flex-row flex-wrap">
      <div v-for="(inventoryItem, index) in inventoryItems" :key="index + '-' + inventoryItem.item.id">
        <igt-inventory-slot :inventory-item="inventoryItem"
                            :is-selected="index === selectedIndex"
                            :index="index"
                            @interact="interact"
                            @click.native="selectItem(index)"
        ></igt-inventory-slot>
      </div>
    </div>

    <igt-inventory-item-highlight
        v-if="showHighlight"
        :selected-inventory-item="selectedItem"
        @consume="consumeItem"
        @drop="dropStack"
    ></igt-inventory-item-highlight>
  </igt-feature>
</template>

<script>
import {App} from "@/App.ts"
import IgtFeature from "@/components/util/igt-feature";
import IgtInventorySlot from "@/components/features/inventory/igt-inventory-slot";
import IgtInventoryItemHighlight from "@/components/features/inventory/igt-inventory-item-highlight";

export default {
  name: "igt-inventory",
  components: {IgtInventoryItemHighlight, IgtInventorySlot, IgtFeature},
  data() {
    return {
      inventory: App.game.features.inventory,
      itemList: App.game.features.itemList,
      selectedIndex: -1,
    }
  },
  computed: {
    inventoryItems() {
      return this.inventory.inventoryItems;
    },
    selectedItem() {
      return this.inventoryItems[this.selectedIndex];
    },
    showHighlight() {
      return this.selectedItem && !this.selectedItem.isEmpty();
    }
  },

  methods: {
    interact(data) {
      this.inventory.interactIndices(data.from, data.to)
      this.selectedIndex = data.to
    },
    consumeItem() {
      this.inventory.consumeItem(this.selectedIndex)
    },
    dropStack() {
      this.inventory.dropStack(this.selectedIndex)
    },
    gainItem() {
      this.inventory.gainItem(this.itemList.moneyPouch);
    },
    selectItem(index) {
      this.selectedIndex = index;
    },
  },
}
</script>

<style scoped>

</style>
