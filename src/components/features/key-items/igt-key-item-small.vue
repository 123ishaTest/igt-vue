<template>
  <span class="flex flex-row">
    <img v-if="item.image"
         class="w-8 h-8 mr-1"
         :src="require(`@/assets/${item.image}`)" :alt="item.image">
    {{ item.name }}
  </span>

</template>

<script>
import {KeyItem} from "@/ig-template/features/key-items/KeyItem";

export default {
  name: "igt-key-item-small",
  props: {
    item: {
      type: KeyItem,
      required: true,
    },
  },
}
</script>

<style scoped>
</style>
