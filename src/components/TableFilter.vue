<template>
  <div>
    <span>Filtrer par nutri-score</span>
    <el-checkbox-group v-model="filters">
      <el-checkbox-button v-for="score in enabledScore" :label="score" :key="score" checked>{{ score }}</el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {

    computed: {
        enabledScore() {
            // Array.from transforme le Set en Array sinon il ne peut pas être sort()
            return Array.from(new Set(this.$store.state.cereals.map(cereal => cereal.score))).sort();
        },
        filters: {
            // Redirige vers le store
            get() {
                return this.$store.state.filters;
            },
            set(newFilter) {
                this.$store.dispatch('filter', newFilter)
            }
        }
    }
}
</script>
