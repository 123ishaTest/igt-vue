<template>
  <div>
    <span>{{ booster.description }}</span>

    <div class="flex flex-row flex-wrap">
      <button class="btn" :class="booster.currentTierIndex === -1 ? 'btn-green' : 'btn-blue'" @click="select(-1)">
        None
      </button>
      <button class="btn" :class="index === booster.currentTierIndex ? 'btn-green' : 'btn-blue'"
              @click="select(index)"
              :disabled="!tier.canUse()"
              :title="tier.requirement.hint"
              v-for="(tier, index) in booster.tiers" :key="tier.output"> {{ tier.displayName }}
        <span class="flex flex-row" v-for="currency in tier.costs" :key="currency.type">
          <igt-currency :negative="true" :currency="currency"></igt-currency>
          <span>/s</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import IgtCurrency from "@/components/features/wallet/igt-currency";
import {Booster} from "incremental-game-template";

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
      this.booster.selectTier(index);
    }
  },

}
</script>

<style scoped>

</style>
