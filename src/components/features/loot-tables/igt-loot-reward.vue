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
import {AbstractLoot} from "@/ig-template/features/loot-tables/rewards/AbstractLoot";
import {InventoryItemLoot} from "@/ig-template/features/loot-tables/rewards/InventoryItemLoot";
import {KeyItemLoot} from "@/ig-template/features/loot-tables/rewards/KeyItemLoot";
import {CurrencyLoot} from "@/ig-template/features/loot-tables/rewards/CurrencyLoot";
import IgtCurrency from "@/components/features/wallet/igt-currency";
import IgtKeyItemSmall from "@/components/features/key-items/igt-key-item-small";

export default {
  name: "igt-loot-reward",
  components: {IgtKeyItemSmall, IgtCurrency},
  props: {
    loot: {
      type: AbstractLoot,
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
