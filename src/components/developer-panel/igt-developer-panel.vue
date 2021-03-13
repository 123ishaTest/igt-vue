<template>
  <div class="feature-tab bg-yellow-100">
    <div class="text-xl">Developer Panel</div>
    <igt-tabs>
      <igt-tab :name="tab.label | humanizeString " :selected="index === 0" :key="index + '-' +tab.label"
               v-for="(tab, index) in developerPanel.tabs">
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
import IgtDisplayField from "@/components/developer-panel/fields/igt-display-field";
import IgtChoiceField from "@/components/developer-panel/fields/igt-choice-field";

export default {
  name: "igt-developer-panel",
  components: {IgtChoiceField, IgtDisplayField, IgtTab, IgtTabs, IgtRangeField, IgtButtonField, IgtNumberField},
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
