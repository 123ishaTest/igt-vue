<template>
  <div>
    <h3>Wallet</h3>
    <ul>
      <li>Money: {{ money }}</li>
      <li>Secondary: {{ secondary }}</li>
    </ul>
    <button class="btn btn-primary" @click="gainMoney(10)">
      Gain 10 Money<br>
      App.game.wallet.gainCurrency(new Currency(50, CurrencyType.Money));
    </button>
    <button class="btn btn-primary" @click="loseMoney(9)">
      Lose 9 Money (if you have it) <br>
      App.game.wallet.payIfPossible(new Currency(50, CurrencyType.Money));
    </button>

    <button class="btn btn-primary" :disabled="!hasMoney(50)">
      App.game.wallet.hasCurrency(new Currency(50, CurrencyType.Money));
    </button>
  </div>
</template>

<script>
import {App} from "@/App.ts"
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {Currency} from "@/ig-template/features/wallet/Currency";

export default {
  name: "igt-wallet",
  data() {
    return {
      wallet: App.game.wallet,
    }
  },
  methods: {
    gainMoney(amount) {
      this.wallet.gainCurrency(new Currency(amount, CurrencyType.Money));
    },
    loseMoney(amount) {
      this.wallet.payIfPossible(new Currency(amount, CurrencyType.Money));
    },
    hasMoney(amount) {
      return this.wallet.hasCurrency(new Currency(amount, CurrencyType.Money));
    }
  },
  computed: {
    money() {
      return this.wallet.currencies[CurrencyType.Money];
    },
    secondary() {
      return this.wallet.currencies[CurrencyType.Secondary];
    },
  },

  mounted() {
    this.wallet.onCurrencyGain.subscribe(currency => {
      console.log("We gained", currency.amount, currency.type);
    });  }
}
</script>

<style scoped>

</style>
