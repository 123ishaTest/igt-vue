<template>
  <div class="flex flex-row">
    <span class="align-middle m-4">{{ field.displayLabel }}</span>
    <input class="input-primary w-32" v-model.number="field.feature[field.propertyName]" type="number">
  </div>
</template>

<script>
import {NumberField} from "@/ig-template/developer-panel/NumberField";

export default {
  name: "igt-number-field",

  props: {
    field: {
      type: NumberField,
      required: true,
    }
  },

  data() {
    return {}
  },
  methods: {

    setValue(value) {
      console.log(value)
      this.field.feature = value;
    }
  },
  computed: {
    value() {
      return this.field.feature[this.field.propertyName];
    },
  },

}
</script>

<style scoped>

</style>
