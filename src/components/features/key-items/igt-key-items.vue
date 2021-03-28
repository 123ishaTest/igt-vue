<template>
  <igt-feature>
    <button class="btn btn-green" @click="gainItem1">Gain Item 1</button>
    <div class="flex flex-row flex-wrap">
      <igt-key-item :key="item.id" v-for="item in items" :item="item"></igt-key-item>
    </div>
  </igt-feature>
</template>

<script>
import {App} from "@/App.ts"
import IgtFeature from "@/components/util/igt-feature";
import IgtKeyItem from "@/components/features/key-items/igt-key-item";
import {KeyItemId} from "@/ig-template/features/key-items/KeyItemId";

export default {
  name: "igt-key-items",
  components: {IgtKeyItem, IgtFeature},
  data() {
    return {
      keyItems: App.game.features.keyItems,
    }
  },
  computed: {
    items() {
      return this.keyItems.list;
    }
  },
  methods: {
    gainItem1() {
      this.keyItems.gainKeyItem(KeyItemId.Item1);
    }
  },
  mounted() {
    this.keyItems.onKeyItemGain.subscribe((keyItem) => {
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
