<template>
  <div class="flex flex-row justify-center">
    <span v-if="!textFirst" class="mr-1">{{ currency.amount }}</span>
    <div v-if="showImage" class="w-8 h-8">
      <img v-if="currency.type === CurrencyType.Money" :src="require('@/assets/images/currencies/money.svg')" :alt="currency.type">
      <img v-else-if="currency.type === CurrencyType.Secondary" :src="require('@/assets/images/currencies/secondary.svg')" :alt="currency.type">
    </div>
    <span v-else>{{ currency.type }}</span>

    <span v-if="textFirst" class="ml-1">{{ currency.amount }}</span>

  </div>
</template>

<script>
import {Currency} from "@/ig-template/features/wallet/Currency";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";

export default {
  name: "igt-currency",
  data() {
    return {
      CurrencyType: CurrencyType,
    }
  },
  props: {
    currency: {
      type: Currency,
      required: true,
    },
    // Show image or text
    showImage: {
      type: Boolean,
      default: false
    },
    // Display the image or text first
    textFirst: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
</style>
