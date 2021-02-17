<template>
  <div class="text-lg">{{ field.displayLabel }}:
    {{ field.value }}
  </div>
</template>

<script>
import {DisplayField} from "@/ig-template/developer-panel/fields/DisplayField";

export default {
  name: "igt-display-field",

  props: {
    field: {
      type: DisplayField,
      required: true,
    }
  },


}
</script>

<style scoped>

</style>
