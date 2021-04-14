<template>
  <div class="bg-gray-500 flex flex-col p-4 text-white">
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
             :max="selectedInventorySlot.amount"/>
    </div>
    <div class="flex flex-row flex-wrap -m-1">
      <input type="text" class="input-primary w-48" v-model="selectedAmount"/>
      <button class="btn btn-blue" @click="selectedAmount=maxAmount - 1">All but one</button>
      <button class="btn btn-blue" @click="selectedAmount=maxAmount">All</button>
    </div>
    <div class="flex flex-row flex-wrap items-center">
      <button v-if="isConsumable" class="btn btn-blue" @click="consumeItem">{{ selectedItem.consumeLabel }}
        ({{ selectedAmount }})
      </button>
      <button class="btn btn-red" @click="dropItem">Drop Stack</button>
    </div>
  </div>
</template>

<script>
import {AbstractConsumable, InventorySlot} from "incremental-game-template";

export default {
  name: "igt-inventory-slot-highlight",
  props: {
    selectedInventorySlot: {
      type: InventorySlot,
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
      this.$emit('drop', {amount: this.selectedAmount});
      this.selectedAmount = Math.min(this.selectedAmount, this.maxAmount);
    }
  },
  computed: {
    maxAmount() {
      return this.selectedInventorySlot.amount;
    },
    selectedItem() {
      return this.selectedInventorySlot.item;
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
