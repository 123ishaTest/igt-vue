<template>
  <div class="flex flex-row">
    <div class="align-middle m-2">{{ field.displayLabel }}</div>
    <select v-model="field.value">
      <option :key="option.value" v-for="option in field.options" v-bind:value="option[1]">
        {{ option[0] }}
      </option>
    </select>
  </div>
</template>

<script>
import {ChoiceField} from "incremental-game-template";

export default {
  name: "igt-choice-field",

  props: {
    field: {
      type: ChoiceField,
      required: true,
    }
  },

}
</script>

<style scoped>

</style>
