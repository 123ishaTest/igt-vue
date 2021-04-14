<template>
  <igt-feature>
    <p>Enter code DUMMY to gain 100 money</p>
    <div class="flex flex-row flex-wrap ">
      <label>
        <input class="input-primary w-full" v-model="code">
      </label>
      <button class="btn btn-blue" @click="submitCode">Submit</button>
    </div>
  </igt-feature>
</template>

<script>
import IgtFeature from "@/components/util/igt-feature";
import {IgtRedeemableCodes} from "incremental-game-template";

export default {
  name: "igt-redeemable-codes",
  components: {IgtFeature},
  props: {
    codesFeature: {
      type: IgtRedeemableCodes,
      required: true
    },
  },
  data() {
    return {
      code: '',
    }
  },
  methods: {
    submitCode() {
      const code = this.codesFeature.enterCode(this.code);
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
