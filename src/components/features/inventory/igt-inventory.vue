<template>
  <igt-feature>
    <button class="btn btn-blue" @click="gainItem">Gain a money pouch</button>
    <button class="btn btn-blue" @click="gainItem2">Gain a money pouch 2</button>
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
        v-if="!!selectedItem"
        :selected-inventory-item="selectedItem"
        @consume="consumeItem"
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
    }
  },

  methods: {
    interact(data) {
      this.inventory.inventoryInteraction(data.from, data.to)
    },
    consumeItem() {
      this.inventory.consumeItem(this.selectedIndex)
    },
    gainItem() {
      this.inventory.gainItem(this.itemList.moneyPouch);
    },
    gainItem2() {
      this.inventory.gainItem(this.itemList.moneyPouch2);
    },
    selectItem(index) {
      this.selectedIndex = index;
    },
  },
}
</script>

<style scoped>

</style>
