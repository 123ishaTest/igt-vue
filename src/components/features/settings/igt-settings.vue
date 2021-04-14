<template>
  <igt-feature>
    <button class="btn btn-red" @click="resetSave">Reset Save</button>
  </igt-feature>
</template>

<script>
import IgtFeature from "@/components/util/igt-feature";
import {IgtSettings} from "incremental-game-template";
import {App} from "@/App";

export default {
  name: "igt-settings",
  components: {IgtFeature},
  props: {
    settingsFeature: {
      type: IgtSettings,
      required: true,
    },
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
}
</script>

<style scoped>

</style>
