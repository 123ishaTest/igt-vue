<template>
  <div class="m-4 p-4 bg-yellow-100">
    <p class="text-lg">Developer Panel</p>
    <hr>
    <div :key=field.propertyName v-for="field in fields">
      <component :is="field.componentName" :field="field"></component>
    </div>

  </div>
</template>

<script>
import {App} from "@/App.ts"
import IgtNumberField from "@/components/developer-panel/igt-number-field";
import IgtButtonField from "@/components/developer-panel/igt-button-field";

export default {
  name: "igt-developer-panel",
  components: {IgtButtonField, IgtNumberField},
  data() {
    return {
      fields: App.game.getDeveloperPanelFields(),
    }
  },
  methods: {},
  computed: {},

}
</script>

<style scoped>

</style>
