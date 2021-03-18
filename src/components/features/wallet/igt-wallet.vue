<template>
  <igt-feature>
    <table class="text-sm sm:text-lg">
      <tr>
        <th>Currency</th>
        <th>Amount</th>
        <th>Multiplier</th>
      </tr>
      <tr>
        <td>Money</td>
        <td>{{ money | numberFormat }}</td>
        <td>
          {{ moneyMultiplier | numberFormat }}x
          <button @click="changeMoneyMultiplier(-0.1)">-</button>
          <button @click="changeMoneyMultiplier(0.1)">+</button>
        </td>
      </tr>
      <tr>
        <td>Secondary</td>
        <td>{{ secondary | numberFormat }}</td>
        <td>{{ secondaryMultiplier | numberFormat }}x</td>
      </tr>
    </table>

    <div class="flex flex-row flex-wrap justify-center sm:justify-start">
      <button class="btn btn-green" @click="gainMoney(10)">
        Gain 10 Money<br>
        App.game.wallet.gainCurrency(new Currency(50, CurrencyType.Money));
      </button>
      <button class="btn btn-green" @click="gainSecondary(10)">
        Gain 10 Secondary<br>
        App.game.wallet.gainCurrency(new Currency(50, CurrencyType.Money));
      </button>
      <button class="btn btn-green" @click="loseMoney(9)">
        Lose 9 Money (if you have it) <br>
        App.game.wallet.payIfPossible(new Currency(50, CurrencyType.Money));
      </button>

      <button class="btn btn-green" :disabled="!hasMoney(50)">
        App.game.wallet.hasCurrency(new Currency(50, CurrencyType.Money));
      </button>
    </div>
  </igt-feature>
</template>

<script>
import {App} from "@/App.ts"
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {Currency} from "@/ig-template/features/wallet/Currency";
import IgtFeature from "@/components/util/igt-feature";

export default {
  name: "igt-wallet",
  components: {IgtFeature},
  data() {
    return {
      wallet: App.game.features.wallet,
    }
  },
  methods: {
    changeMoneyMultiplier(delta) {
      const oldValue = this.moneyMultiplier;
      this.wallet.setCurrencyMultiplier(oldValue + delta, CurrencyType.Money);
    },
    gainMoney(amount) {
      this.wallet.gainCurrency(new Currency(amount, CurrencyType.Money));
    },
    gainSecondary(amount) {
      this.wallet.gainCurrency(new Currency(amount, CurrencyType.Secondary));
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
      return this.wallet._currencies[CurrencyType.Money];
    },
    moneyMultiplier() {
      return this.wallet.getCurrencyMultiplier(CurrencyType.Money);
    },
    secondary() {
      return this.wallet._currencies[CurrencyType.Secondary];
    },
    secondaryMultiplier() {
      return this.wallet.getCurrencyMultiplier(CurrencyType.Secondary);
    },
  },

}
</script>

<style scoped>
th, td {
  padding: 5px;
}
</style>
