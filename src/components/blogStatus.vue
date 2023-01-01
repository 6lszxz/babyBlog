<template>
  <div>
    创建于 {{createTime}}
  </div>
  <div class="blogFunctions">
    <el-button class="oppositeColor" @click="sendToServer">
      上传到服务器
    </el-button>
    <el-button type="danger" @click="deleteBlog">
      删除博客
    </el-button>
  </div>
</template>

<script>
import {DateTime} from "luxon";
import axios from "axios";

export default {
  name: "blogStatus",
  computed:{
    createTime(){
      if(this.$store.state.blogIdNow === null){
        return '';
      }
      return DateTime.fromMillis(Number(this.$store.getters.getBlogNowById.createTime)).toLocaleString(DateTime.DATE_MED)
    }
  },
  methods:{
    sendToServer(){
      axios.post('http://43.142.78.228:4444/updateBlog',{
        title: this.$store.getters.getBlogNowById.title,
        content: this.$store.getters.getBlogNowById.content,
        id: this.$store.getters.getBlogNowById.id,
        createTime: this.$store.getters.getBlogNowById.createTime,
      })
          .then(response=>{
            console.log(response)
          })
          .catch(e=>{
            alert(e);
          })
    },
    deleteBlog(){
      let length = this.$store.state.blogList.length;
      for(let i=0;i<length;i++){
        if(this.$store.state.blogIdNow === this.$store.state.blogList[i].id){
          this.$store.state.blogList.splice(i,1,)
          console.log(this.$store.state.blogList)
          return;
        }

      }
    }
  }
}
</script>

<style scoped lang="scss">
@use "element-plus/theme-chalk/src/common/var";

div.oppositeColor{
  color: var.$color-white;
}
*.oppositeColor{
  background-color: var.$color-primary;
}
.blogFunctions{
  display: flex;
  flex-direction: row;
}
</style>