<template>
  <!-- 导航栏 -->
  <el-container>
    <el-header>
      <head-bar></head-bar>
    </el-header>
  </el-container>
  <!-- 主界面，包括博客导航和文件预览-->
  <el-container class="pageMain">
    <router-view></router-view>
  </el-container>
</template>

<script>
import HeadBar from "@/components/headBar";

export default {

  name: 'App',
  components: {
    HeadBar
  }
}
</script>

<style scoped lang="scss">
*{
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
}

</style>
