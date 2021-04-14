<template>
  <div>
    <div class="flex flex-row justify-between">
      <igt-currency v-if="isCurrency" :currency="loot.currency" :show-image="true"></igt-currency>
      <span v-if="isInventoryItem">{{ loot.amount }} {{ loot.loot.name }}</span>
      <igt-key-item-small v-if="isKeyItem" :item="loot.loot"></igt-key-item-small>
    </div>
  </div>

</template>

<script>
import IgtCurrency from "@/components/features/wallet/igt-currency";
import IgtKeyItemSmall from "@/components/features/key-items/igt-key-item-small";
import {CurrencyLoot, IgtLoot, InventoryItemLoot, KeyItemLoot} from "incremental-game-template";

export default {
  name: "igt-loot-reward",
  components: {IgtKeyItemSmall, IgtCurrency},
  props: {
    loot: {
      type: IgtLoot,
      required: true,
    },
  },
  computed: {
    isInventoryItem() {
      return this.loot instanceof InventoryItemLoot;
    },
    isKeyItem() {
      return this.loot instanceof KeyItemLoot;
    },
    isCurrency() {
      return this.loot instanceof CurrencyLoot;
    },
  },
}
</script>

<style scoped>
</style>
