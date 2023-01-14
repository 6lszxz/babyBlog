<template>
  <el-menu
    mode="horizontal"
  @select="onChange">
    <div class="blogLogo">
      包包博客 BabyBlog
    </div>
    <el-menu-item index="/home">
      首页
    </el-menu-item>
    <el-menu-item index="/myBlogs">
      我的博客
    </el-menu-item>
    <el-menu-item index="/help">
      帮助中心
    </el-menu-item>
    <el-menu-item index="/setting">
      设置
    </el-menu-item>
    <el-menu-item index="/register" v-if="!$store.state.userId">
      注册
    </el-menu-item>
    <el-menu-item index="/login" v-if="!$store.state.userId">
      登录
    </el-menu-item>
    <el-menu-item index="/mySpace" v-if="$store.state.userId">
      {{$store.state.userId}}的个人中心
    </el-menu-item>
    <div class="nightModeButton">
      <el-switch v-model="$store.state.isDarkMode" @change="changeDarkMode"></el-switch>
      <p class="nightModeButton">
        夜间模式
      </p>
    </div>

  </el-menu>
</template>

<script>
import {useToggle} from "@vueuse/core";

export default {
  name: "headBar",
  methods:{
    onChange: function (index) {
      console.log(this.$store.state.userId);
      this.$router.push(index);
    },
    changeDarkMode(){
      useToggle(this.$store.state.isDarkMode);
    }
  },
}
</script>

<style lang="scss">
@use "@/styles/index.scss"
</style>