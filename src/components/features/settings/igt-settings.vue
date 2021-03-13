<template>
  <igt-feature container-class="bg-gray-100">
    <igt-boolean-setting :setting="booleanSetting" true-icon="fa-check" false-icon="fa-times"></igt-boolean-setting>
  </igt-feature>
</template>

<script>
import {App} from "@/App.ts"
import IgtFeature from "@/components/util/igt-feature";
import IgtBooleanSetting from "@/components/features/settings/igt-boolean-setting";

export default {
  name: "igt-settings",
  components: {IgtBooleanSetting, IgtFeature},
  data() {
    return {
      settings: App.game.features.settings,
    }
  },
  computed: {
    booleanSetting() {
      console.log(this.settings.exampleBooleanSetting);
      return this.settings.exampleBooleanSetting;
    }
  },
}
</script>

<style scoped>
th, td {
  padding: 5px;
}
</style>
