<template>
  <div class="flex flex-row justify-center">
    <span v-if="textFirst" class="mr-1"><span v-if="negative">-</span>{{ currency.amount }}</span>
    <div v-if="showImage" class="w-8 h-8">
      <!-- Add images here if you have them -->
<!--      <img v-if="currency.type === CurrencyType.YourCurrency" :src="require('@/assets/images/currencies/money.svg')"-->
<!--           :alt="currency.type">-->
    </div>
    <span v-else>{{ currency.type }}</span>

    <span v-if="!textFirst" class="ml-1"><span v-if="negative">-</span>{{ currency.amount }}</span>

  </div>
</template>

<script>
import {Currency} from "incremental-game-template";

export default {
  name: "igt-currency",
  props: {
    currency: {
      type: Currency,
      required: true,
    },
    negative: {
      type: Boolean,
      default: false
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
