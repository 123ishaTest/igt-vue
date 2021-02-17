<template>
  <div class="m-4 p-4 bg-yellow-100">
    <igt-tabs>
      <igt-tab :name="tab.label | humanizeString " :selected="index === 0" :key="index + '-' +tab.label" v-for="(tab, index) in developerPanel.tabs">
        <div :key="index + '-' +field.propertyName" v-for="(field, index) in tab.children">
          <component :is="field.componentName" :field="field"></component>
        </div>
      </igt-tab>
    </igt-tabs>


  </div>
</template>

<script>
import {App} from "@/App.ts"
import IgtNumberField from "@/components/developer-panel/fields/igt-number-field";
import IgtButtonField from "@/components/developer-panel/fields/igt-button-field";
import IgtRangeField from "@/components/developer-panel/fields/igt-range-field";
import IgtTabs from "@/components/util/igt-tabs";
import IgtTab from "@/components/util/igt-tab";

export default {
  name: "igt-developer-panel",
  components: {IgtTab, IgtTabs, IgtRangeField, IgtButtonField, IgtNumberField},
  data() {
    return {
      developerPanel: App.game.getDeveloperPanel(),
    }
  },
  computed: {},

}
</script>

<style scoped>

</style>
