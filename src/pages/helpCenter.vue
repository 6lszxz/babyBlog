<template>
  <el-aside>
    <el-menu mode="vertical" @select="getContentNow">
      <el-menu-item index="/server/question.json">
        常见问题
      </el-menu-item>
      <el-menu-item index="/server/ownerInformation.json">
        作者信息
      </el-menu-item>
    </el-menu>
  </el-aside>
  <el-main>
  <div>
    <ul v-for="part of contentNow" :key="part">
      <li>
        <h2>
          {{part.title}}
        </h2>
        {{part.content}}
      </li>
    </ul>
  </div>
  </el-main>
</template>

<script>

import axios from "axios";

export default {
  name: "helpCenter",
  data(){
    return{
      contentNow: [],
      isError: true,
    }
  },
  methods:{
    async getContentNow(index){
      try{
        axios.get(index)
            .then((response)=>{
              this.contentNow = response.data;
              this.isError = false;
            })
      }catch (e){
        this.contentNow = e;
      }
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>