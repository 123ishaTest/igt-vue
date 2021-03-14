<template>
  <igt-feature container-class="bg-gray-100">
    <p>Redeemable codes are a great way to reward a specific set of players.
      You can distribute a code in your Discord that gives the user 100 money once.</p>
    <p>It is also useful for an early beta, where you can let the testers skip the early game with a code.</p>

    <div class="flex flex-row">
      <label>
        <input class="input-primary" v-model="code">
      </label>
      <button class="btn btn-blue" @click="submitCode">Submit</button>
    </div>
  </igt-feature>
</template>

<script>
import {App} from "@/App.ts"
import IgtFeature from "@/components/util/igt-feature";

export default {
  name: "igt-redeemable-codes",
  components: {IgtFeature},
  data() {
    return {
      codes: App.game.features.codes,
      code: '',
    }
  },
  methods: {
    submitCode() {
      const code = this.codes.enterCode(this.code);
      if (code) {
        this.$notify(
            {
              title: `Code redeemed`,
              text: code.description,
              type: "success",
              group: "top-left",
            },
            4000
        );
      } else {
        const text = code === false ? 'Code is already redeemed' : 'Code is not valid';
        this.$notify(
            {
              title: 'Wrong code',
              text: text,
              type: "error",
              group: "top-left",
            },
            4000
        );
      }
      this.code = '';
    }
  },

}
</script>

<style scoped>

</style>
