<template>
  <div>
    <div class="flex flex-row justify-between">
      <span :title="entry.requirement.hint" :class="{'line-through': !entry.canGet()}">
      <span v-if="entry.amount.min !== entry.amount.max">
        {{ entry.amount.min }} -
      </span> {{ entry.amount.max }}
      <span v-if="isTable">A roll on the {{ entry.table }} table</span>
      <span v-if="isCurrency">{{ entry.type }}</span>
      <span v-if="isInventoryItem">{{ entry.item.name }}</span>
      <span v-if="isKeyItem">Key Item {{ entry.item }}</span>
</span>

      <span class="ml-4" v-if="showWeightAsPercentage">{{ entry.weight * 100 | numberFormat }}%</span>
    </div>
  </div>

</template>

<script>
import {AbstractLootEntry} from "@/ig-template/features/loot-tables/entries/AbstractLootEntry";
import {TableEntry} from "@/ig-template/features/loot-tables/entries/TableEntry";
import {InventoryItemEntry} from "@/ig-template/features/loot-tables/entries/InventoryItemEntry";
import {KeyItemEntry} from "@/ig-template/features/loot-tables/entries/KeyItemEntry";
import {CurrencyEntry} from "@/ig-template/features/loot-tables/entries/CurrencyEntry";

export default {
  name: "igt-loot-entry",
  props: {
    entry: {
      type: AbstractLootEntry,
      required: true,
    },
    showWeightAsPercentage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
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
