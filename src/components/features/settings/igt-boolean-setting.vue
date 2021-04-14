<template>
  <div>
    <button @click="toggle" class="btn btn-blue">
      <div class="flex flex-row items-center">
        <span v-if="icon" class="fa text-lg p-2 w-8" :class="icon"></span>
        <span>{{ setting.displayName }}</span>
      </div>
    </button>
  </div>


</template>

<script>
import {BooleanSetting} from "incremental-game-template";

export default {
  name: "igt-boolean-setting",
  props: {
    setting: {
      type: BooleanSetting,
      required: true,
    },
    trueIcon: {
      type: String,
      default: '',
    },
    falseIcon: {
      type: String,
      default: '',
    },
  },
  methods: {
    toggle() {
      this.setting.toggle();
    },
  },
  computed: {
    icon() {
      return this.setting.value ? this.trueIcon : this.falseIcon;
    },
  }
}
</script>

<style scoped>
</style>
