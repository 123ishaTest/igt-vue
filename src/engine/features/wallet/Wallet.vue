<template>
  <div>
    <p v-if="moneyDisplaySetting.value"> Money: {{ money }}</p>
    <p v-else> ${{ money }}</p>
  </div>
</template>

<script>

import {App} from "@/App.ts";
import {CurrencyType} from "@/engine/features/wallet/CurrencyType";

export default {
  name: "Wallet",

  data: function () {
    return {
      wallet: App.game.wallet,
      moneyDisplaySetting: App.game.settings.getSetting('money-display'),
    }
  },

  computed: {
    money() {
      return this.wallet.currencies[CurrencyType[CurrencyType.money]];
    }
  }

}
</script>

<style scoped lang="scss">
@import './src/index.scss';

div {
  background-color: white;
  color: $primary-color
}
</style>
