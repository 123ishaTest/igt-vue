<template>
  <div class="flex flex-row">
    <div class="align-middle m-2">{{ field.displayLabel }} - {{ field.value }}</div>
    <input type="range" class="input-range" v-model.number="field.value"/>
  </div>
</template>

<script>
import {RangeField} from "incremental-game-template";

export default {
  name: "igt-range-field",

  props: {
    field: {
      type: RangeField,
      required: true,
    }
  },

}
</script>

<style scoped>

</style>
