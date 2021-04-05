<template>
  <igt-feature>
    Loot Tables
    <button class="btn btn-green" @click="roll">Roll</button>
    <div class="flex flex-col flex-wrap">
      <div v-for="(loot, index) in latestLoot" :key="index">
        <span>{{loot.amount}} {{loot.toHtml()}}</span>
      </div>
    </div>
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
      latestLoot: [],
      lootTables: App.game.features.lootTables,
    }
  },
  methods: {
    roll() {
      const loot = this.lootTables[LootTableId.Example].roll();
      this.latestLoot = loot;
      console.log(loot);
    }
  },
}
</script>

<style scoped>
</style>
