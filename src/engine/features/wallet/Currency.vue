<template>
  <div>
    <p> {{ currency.amount }} {{ currencyType }}</p>
  </div>
</template>

<script>
import {Currency} from "@/engine/features/wallet/Currency";
import {CurrencyType} from "@/engine/features/wallet/CurrencyType";

export default {
  name: "Currency",

  props: {
    currency: Currency
  },

  computed: {
    currencyType() {
      return CurrencyType[this.currency.type];
    }
  }

}
</script>

<style scoped>

</style>
