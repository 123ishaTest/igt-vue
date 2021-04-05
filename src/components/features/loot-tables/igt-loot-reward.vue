<template>
  <div>
    <div class="flex flex-row justify-between">
      <igt-currency v-if="isCurrency" :currency="loot.currency" :show-image="true"></igt-currency>
      <span v-if="isInventoryItem">{{ loot.amount }} {{ loot.loot.name }}</span>
      <span v-if="isKeyItem">Key Item {{ loot.loot }}</span>
    </div>
  </div>

</template>

<script>
import {AbstractLoot} from "@/ig-template/features/loot-tables/rewards/AbstractLoot";
import {InventoryItemLoot} from "@/ig-template/features/loot-tables/rewards/InventoryItemLoot";
import {KeyItemLoot} from "@/ig-template/features/loot-tables/rewards/KeyItemLoot";
import {CurrencyLoot} from "@/ig-template/features/loot-tables/rewards/CurrencyLoot";
import IgtCurrency from "@/components/features/wallet/igt-currency";

export default {
  name: "igt-loot-reward",
  components: {IgtCurrency},
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
