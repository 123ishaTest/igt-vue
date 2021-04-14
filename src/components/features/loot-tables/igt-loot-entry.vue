<template>
  <div>
    <div class="flex flex-row justify-between" :title="entry.requirement.hint"
         :class="{'line-through': !entry.canGet()}">
      <div>
        <span>{{ displayAmount }} </span>
        <span v-if="isTable">A roll on the {{ entry.table }} table</span>
        <span v-if="isCurrency">{{ entry.type }}</span>
        <span v-if="isInventoryItem">{{ entry.item.name }}</span>
        <igt-key-item-small v-if="isKeyItem" :item="entry.item"></igt-key-item-small>
      </div>

      <span class="ml-4" v-if="showWeightAsPercentage">{{ entry.weight * 100 | numberFormat }}%</span>
    </div>
  </div>

</template>

<script>
import IgtKeyItemSmall from "@/components/features/key-items/igt-key-item-small";
import {CurrencyEntry, IgtLootEntry, InventoryItemEntry, KeyItemEntry, TableEntry} from "incremental-game-template";

export default {
  name: "igt-loot-entry",
  components: {IgtKeyItemSmall},
  props: {
    entry: {
      type: IgtLootEntry,
      required: true,
    },
    showWeightAsPercentage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    displayAmount() {
      if (this.entry.amount.min === this.entry.amount.max) {
        return this.entry.amount.min === 1 ? "" : this.entry.amount.min;
      }
      return `${this.entry.amount.min} - ${this.entry.amount.max}`;
    },
    isTable() {
      return this.entry instanceof TableEntry;
    },
    isInventoryItem() {
      return this.entry instanceof InventoryItemEntry;
    },
    isKeyItem() {
      return this.entry instanceof KeyItemEntry;
    },
    isCurrency() {
      return this.entry instanceof CurrencyEntry;
    },
  },
}
</script>

<style scoped>
</style>
