<template>
  <igt-feature>
    <igt-boolean-setting :setting="darkMode" true-icon="fa-moon" false-icon="fa-sun"></igt-boolean-setting>
    <button class="btn btn-red" @click="resetSave">Reset Save</button>
    <igt-keybind-setting :setting="keyBind"></igt-keybind-setting>
  </igt-feature>
</template>

<script>
import {App} from "@/App.ts"
import IgtFeature from "@/components/util/igt-feature";
import IgtBooleanSetting from "@/components/features/settings/igt-boolean-setting";
import IgtKeybindSetting from './igt-keybind-setting.vue';

export default {
  name: "igt-settings",
  components: {IgtBooleanSetting, IgtFeature, IgtKeybindSetting},
  data() {
    return {
      settings: App.game.features.settings,
    }
  },
  methods: {
    resetSave() {
      const confirmed = confirm("Are you sure you want to delete your save? This will not give you any rewards");
      if (!confirmed) {
        return;
      }
      App.game.deleteSave();
      location.reload();
    }
  },
  computed: {
    darkMode() {
      return this.settings.darkMode;
    },
    keyBind() {
      return this.settings.keyBind;
    }
  },
}
</script>

<style scoped>
th, td {
  padding: 5px;
}
</style>
