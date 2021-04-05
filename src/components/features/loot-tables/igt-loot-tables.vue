<template>
  <igt-feature>
    Loot Tables
    <igt-loot-table :table="exampleTable"></igt-loot-table>
    <button class="btn btn-green" @click="roll">Roll</button>
    <div class="flex flex-col flex-wrap">
      <div v-for="(loot, index) in latestLoot" :key="index">
        <igt-loot-reward :loot="loot"></igt-loot-reward>
      </div>
    </div>
  </igt-feature>
</template>

<script>
import {App} from "@/App.ts"
import IgtFeature from "@/components/util/igt-feature";
import {LootTableId} from "@/ig-template/features/loot-tables/LootTableId";
import IgtLootTable from "@/components/features/loot-tables/igt-loot-table";
import IgtLootReward from "@/components/features/loot-tables/igt-loot-reward";

export default {
  name: "igt-loot-tables",
  components: {IgtLootReward, IgtLootTable, IgtFeature},
  data() {
    return {
      latestLoot: [],
      lootTables: App.game.features.lootTables,
    }
  },
  computed: {
    exampleTable() {
      return this.lootTables.example;
    }
  },
  methods: {
    roll() {
      const loot = this.lootTables[LootTableId.Example].roll();
      this.latestLoot = loot;
    }
  },
}
</script>

<style scoped>
</style>
