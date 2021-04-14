<template>
  <igt-feature container-class="bg-yellow-100 dark:bg-gray-700">
    <igt-tabs>
      <igt-tab :name="tab.label | humanizeString " :selected="index === 0" :key="index + '-' +tab.label"
               v-for="(tab, index) in developerPanel.tabs">
        <div :key="index + '-' +field.propertyName" v-for="(field, index) in tab.children">
          <component :is="field.componentName" :field="field"></component>
        </div>
      </igt-tab>
    </igt-tabs>
  </igt-feature>
</template>

<script>
import IgtNumberField from "@/components/developer-panel/fields/igt-number-field";
import IgtButtonField from "@/components/developer-panel/fields/igt-button-field";
import IgtRangeField from "@/components/developer-panel/fields/igt-range-field";
import IgtTabs from "@/components/util/igt-tabs";
import IgtTab from "@/components/util/igt-tab";
import IgtDisplayField from "@/components/developer-panel/fields/igt-display-field";
import IgtChoiceField from "@/components/developer-panel/fields/igt-choice-field";
import IgtFeature from "@/components/util/igt-feature";
import {DeveloperPanel} from "incremental-game-template";

export default {
  name: "igt-developer-panel",
  components: {
    IgtFeature,
    IgtChoiceField,
    IgtDisplayField,
    IgtTab,
    IgtTabs,
    IgtRangeField,
    IgtButtonField,
    IgtNumberField,
  },
  props: {
    developerPanel: {
      type: DeveloperPanel,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
