<template>
  <div>
    <div class="mt-1 flex rounded-md shadow-sm">
        <button class="btn btn-blue">
        <div class="flex flex-row items-center">
            <span>{{ setting.displayName }}</span>
        </div>
        </button>
        <input type="text" v-on:keydown.self="keydown($event)" v-bind:value="setting.keybind.keys">
    </div>
  </div>
</template>

<script>
import { KeyBindSetting } from '@/ig-template/features/settings/KeyBindSetting';

export default {
  name: "igt-keybind-setting",
  props: {
    setting: {
      type: KeyBindSetting,
      required: true,
    }
  },
  methods: {
    keydown: function (event) {
        const value = KeyBindSetting.parseEvent(event);
        if (value) {
            this.setting.set(value);
        }
        event.preventDefault();
    }
  },
}
</script>

<style scoped>
</style>