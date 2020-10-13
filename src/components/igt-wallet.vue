<template>
  <div>
    <h3>Wallet</h3>
    <table>
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

    <button class="btn btn-primary" @click="gainMoney(10)">
      Gain 10 Money<br>
      App.game.wallet.gainCurrency(new Currency(50, CurrencyType.Money));
    </button>
    <button class="btn btn-primary" @click="gainSecondary(10)">
      Gain 10 Secondary<br>
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

  mounted() {
    this.wallet.onCurrencyGain.subscribe(currency => {
      console.log("We gained", currency.amount, currency.type);
    });
  }
}
</script>

<style scoped>
th, td {
  padding: 5px;
}
</style>
