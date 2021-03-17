<template>
  <div class="bg-gray-500 flex flex-col p-4">
    <div>
      {{ selectedItem.name }}
    </div>
    <div>{{ selectedItem.description }}</div>
    <div class="flex flex-row justify-between items-center">
      <div>0</div>
      <div>{{ maxAmount }}</div>
    </div>
    <div class="flex flex-row">
      <input type="range" class="rounded-lg bg-gray-400 h-4 w-full" v-model="selectedAmount" min="0"
             :max="selectedInventoryItem.amount"/>
    </div>
    <div class="flex flex-row">
      <input type="text" class="input-primary" v-model="selectedAmount"/>
      <button class="btn btn-blue" @click="selectedAmount=maxAmount - 1">All but one</button>
      <button class="btn btn-blue" @click="selectedAmount=maxAmount">All</button>
    </div>
    <div class="flex flex-row items-center">
      <button v-if="isConsumable" class="btn btn-blue" @click="consumeItem">{{ selectedItem.label }}
        ({{ selectedAmount }})
      </button>
      <button class="btn btn-red" @click="dropItem">Drop Stack</button>
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

  data() {
    return {
      selectedAmount: 0,
    };
  },

  methods: {
    consumeItem() {
      this.$emit('consume', {amount: this.selectedAmount});
      this.selectedAmount = Math.min(this.selectedAmount, this.maxAmount);
    },
    dropItem() {
      const really = confirm(`Are you sure you want to drop this stack of ${this.selectedItem.name}?`)
      if (!really) {
        return;
      }
      this.$emit('consume', {amount: this.selectedAmount});
      this.selectedAmount = Math.min(this.selectedAmount, this.maxAmount);
    }
  },
  computed: {
    maxAmount() {
      return this.selectedInventoryItem.amount;
    },
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
