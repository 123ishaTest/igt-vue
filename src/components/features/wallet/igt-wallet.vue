<template>
  <igt-feature>
    Wallet
  </igt-feature>
</template>

<script>
import IgtFeature from "@/components/util/igt-feature";
import {IgtWallet} from "incremental-game-template";

export default {
  name: "igt-wallet",
  components: {IgtFeature},
  props: {
    walletFeature: {
      type: IgtWallet,
      required: true
    },
  },
}
</script>

<style scoped>

</style>
