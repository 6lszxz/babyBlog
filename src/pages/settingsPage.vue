<template>
  <el-aside>
    <el-menu mode="vertical" @select="changeIndex">
      <el-menu-item index="switchTheme">
        主题选择（当然现在还不能选）
      </el-menu-item>
    </el-menu>
  </el-aside>
  <el-main>
  <div v-if="selectedIndex==='switchTheme'">
    <el-radio-group class="themesList" size="large" v-model="$store.state.themeNow">
      <el-radio border label="blue">
        饿了么蓝
      </el-radio>
      <el-radio border label="yellow">
        美团黄
      </el-radio>
    </el-radio-group>
  </div>
  </el-main>
</template>

<script>
export default {
  name: "settingsPage",
  data(){
    return{
      selectedIndex: '',
    }
  },
  methods: {
    changeIndex(index){
      this.selectedIndex = index
    }
  }
}
</script>

<style scoped>

</style>