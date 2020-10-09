<template>
  <div>
    <span> {{ setting.displayName }} </span>
    <input type="checkbox" :checked="setting.value" v-on:change="change">
    <span> {{ setting.value }} </span>
  </div>


</template>

<script>
import {BooleanSetting} from "@/engine/features/settings/BooleanSetting";
import {App} from "@/App.ts";

export default {
  name: "BooleanSetting",

  props: {
    setting: BooleanSetting
  },

  methods: {
    change(event) {
      App.game.settings.setSettingByName(this.setting.name, event.target.checked)
    },
  }
}
</script>

<style scoped>

</style>
