<template>
  <div class="flex flex-row">
    <button class="btn" :class="field.cssClass" @click="run()">
      {{ field.displayLabel }}
    </button>

  </div>
</template>

<script>
import {FunctionField} from "incremental-game-template";

export default {
  name: "igt-button-field",

  props: {
    field: {
      type: FunctionField,
      required: true,
    }
  },
  methods: {
    run: function () {
      this.field.func();
    }
  },

}
</script>

<style scoped>

</style>
