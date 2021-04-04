<template>
  <div>
    <span>{{booster.description}}</span>

    <div class="flex flex-row flex-wrap">
      <button class="btn" :class="booster.currentTierIndex === -1 ? 'btn-green' : 'btn-blue'" @click="select(-1)">
        None
      </button>
      <button class="btn" :class="index === booster.currentTierIndex ? 'btn-green' : 'btn-blue'"
              @click="select(index)"
              v-for="(tier, index) in booster.tiers" :key="tier.output"> {{ tier.displayName }}
        <igt-currency v-for="currency in tier.costs" :key="currency.type" :currency="currency"></igt-currency>
      </button>
    </div>
  </div>
</template>

<script>

import {Booster} from "@/ig-template/tools/boosters/Booster";
import IgtCurrency from "@/components/features/wallet/igt-currency";

export default {
  name: "igt-booster",
  components: {IgtCurrency},
  props: {
    booster: {
      type: Booster,
      required: true,
    },
  },
  methods: {
    select(index) {
      this.booster.currentTierIndex = index;
    }
  },

}
</script>

<style scoped>

</style>
