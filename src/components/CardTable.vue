<template>
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <el-row>
      <el-col style="margin-top: inherit;" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
    <span class="text"><b>{{ name }}</b></span>
    </el-col>
    <el-col style="margin-top: inherit;" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
    <el-button-group style="float: right;">
      <el-button @click="info = !info" type="primary" icon="el-icon-info"></el-button>
      <el-button @click="eventCard" type="danger" icon="el-icon-delete"></el-button>
    </el-button-group>
      </el-col>
    </el-row>
  </div>
  <div v-show="info">
    <el-progress type="circle" :percentage="rating" :color="customColorMethod" class="progress"></el-progress>
    <el-image
      style="float: right; width: 50%; height: 7.5em"
      :src="customURLMethod"
      fit='contain'></el-image>
  </div>
  <div v-show="!info">
    <div class="infoLeft text">
      <span><b>Calories :</b> {{calories}} kcal</span><br/>
      <span><b>Glucides :</b> {{carbo}} g</span><br/>
      <span><b>Fibres :</b> {{fiber}} g</span><br/>
      <span><b>Sucre :</b> {{sugars}} g</span><br/>
    </div>
    <div class="infoRight text">
      <span><b>Protéines :</b> {{protein}} g</span><br/>
      <span><b>Sodium :</b> {{sodium}} mg</span><br/>
      <span><b>Potassium :</b> {{potass}} mg</span><br/>
      <span><b>Vitamines :</b> {{vitamins}}</span>
    </div>
  </div>
</el-card>
</template>
<script>
  export default {
    data() {
      return {
        info: true,
      };
    },
    methods: {
      eventCard() {
        this.$store.dispatch('deleteCardByID', this.id);
      }
    },
    computed: {
      customColorMethod() {
        switch (this.score) {
          case "A": return 'darkgreen';
          case "B": return '#009900CC';
          case "C": return '#CCCC00CC';
          case "D": return '#CC6600CC';
          default: return '#CC0000CC';
        }
      },
      customURLMethod() {
          return "https://static.openfoodfacts.org/images/attributes/nutriscore-" + this.score.toLowerCase() + ".svg";
      }
    },
props: {
    id: {
        type: Number,
        required: true
        },
    name: {
        type: String,
        required: true
        },
    calories: {
        type: Number,
        required: true
        },
    protein: {
        type: Number,
        required: true
        },
    sodium: {
        type: Number,
        required: true
        },
    fiber: {
        type: Number,
        required: true
        },
    carbo: {
        type: Number,
        required: true
        },
    sugars: {
        type: Number,
        required: true
        },
    potass: {
        type: Number,
        required: true
        },
    vitamins: {
        type: Number,
        required: true
        },
    rating: {
        type: Number,
        required: true
        },
    score: {
        type: String,
        required: true
        }
  }
}
</script>

<style>
  .text {
    font-size: 16px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  
  .box-card {
    height: 15em;
  }

  .infoLeft {
    float: left;
    margin-top: 1.5em;
    margin-bottom: 1em;
  }

  .infoRight {
    float: right;
    margin-top: 1.5em;
    margin-bottom: 1em;
  }
</style>