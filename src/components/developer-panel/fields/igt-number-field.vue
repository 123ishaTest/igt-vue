<template>
  <div class="flex flex-row">
    <span class="align-middle m-4">{{ field.displayLabel }}</span>
    <label>
      <input class="input-primary w-32" v-model.number="field.value" type="number">
    </label>
  </div>
</template>

<script>
import {NumberField} from "incremental-game-template";

export default {
  name: "igt-number-field",

  props: {
    field: {
      type: NumberField,
      required: true,
    }
  },

}
</script>

<style scoped>

</style>
