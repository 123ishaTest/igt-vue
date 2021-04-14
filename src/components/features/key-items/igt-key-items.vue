<template>
  <igt-feature>
    <div class="flex flex-row flex-wrap">
      <igt-key-item :key="item.id" v-for="item in items" :item="item"></igt-key-item>
    </div>
  </igt-feature>
</template>

<script>
import IgtFeature from "@/components/util/igt-feature";
import IgtKeyItem from "@/components/features/key-items/igt-key-item";
import {IgtKeyItems} from "incremental-game-template";

export default {
  name: "igt-key-items",
  components: {IgtKeyItem, IgtFeature},
  props: {
    keyItemsFeature: {
      type: IgtKeyItems,
      required: true
    },
  },
  computed: {
    items() {
      return this.keyItemsFeature.list;
    }
  },
  mounted() {
    this.keyItemsFeature.onKeyItemGain.subscribe((keyItem) => {
      this.$notify(
          {
            title: `Key Item get: ${keyItem.name}`,
            text: keyItem.description,
            type: "success",
            group: "top-left",
          },
          4000
      );
    })
  }
}
</script>

<style scoped>
</style>
