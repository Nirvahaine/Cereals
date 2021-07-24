<template>
  <div>
    <el-row>
      <el-col align="middle" :xl="24">
        <table-filter/>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" v-for="cereal in $store.state.filteredCereals" :key="cereal.id">
        <div>
          <card-table
            :id="cereal.id" 
            :name="cereal.name"
            :calories="cereal.calories" 
            :protein="cereal.protein" 
            :sodium="cereal.sodium"
            :fiber="cereal.fiber"
            :carbo="cereal.carbo"
            :sugars="cereal.sugars"
            :potass="cereal.potass"
            :vitamins="cereal.vitamins"
            :rating="cereal.rating"
            :score="cereal.score"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CardTable from './components/CardTable.vue'
import TableFilter from './components/TableFilter.vue'

export default {
  components: { CardTable, TableFilter }
}
</script>

<style>
  .el-col {
    border-radius: 4px;
    margin-top: 1em;
  }

</style>