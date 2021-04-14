<template>
  <div class="flex flex-col border-2 m-2 p-2 h-48 w-36 justify-between shadow-md"
       :class="{'bg-gray-400': !item.isUnlocked, 'bg-green-500': item.isUnlocked}"
       :title="item.isUnlocked ? item.description : item.unlockHint"
  >
    <div>

      <p class="text-lg text-center font-semibold"> {{ item.name }}</p>
      <hr>

      <div class="mt-2 w-16 h-16 mx-auto">
        <img v-if="item.image"
             :class="{'filter-grayscale': !item.isUnlocked}"
             :src="require(`@/assets/${item.image}`)" :alt="item.image">
      </div>
      <p class="text-sm"> {{ item.description }}</p>
    </div>

  </div>

</template>

<script>
import {KeyItem} from "incremental-game-template";

export default {
  name: "igt-key-item",
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
