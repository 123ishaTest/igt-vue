<template>
  <igt-feature>
    Loot Tables
    <button class="btn btn-green" @click="roll">Roll</button>
  </igt-feature>
</template>

<script>
import {App} from "@/App.ts"
import IgtFeature from "@/components/util/igt-feature";
import {LootTableId} from "@/ig-template/features/loot-tables/LootTableId";

export default {
  name: "igt-loot-tables",
  components: {IgtFeature},
  data() {
    return {
      lootTables: App.game.features.lootTables,
    }
  },
  methods: {
    roll() {
      const loot = this.lootTables[LootTableId.Example].roll();
      console.log(loot);
    }
  },
}
</script>

<style scoped>
</style>
