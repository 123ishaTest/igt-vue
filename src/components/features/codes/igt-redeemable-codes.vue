<template>
  <igt-feature>
    <p>Enter code DUMMY to gain 100 money</p>
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
