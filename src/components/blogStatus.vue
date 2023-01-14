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
import * as encode from '@/scripts/utf8Unicode'

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
      axios.post('/server/updateBlog',{
        title: encode.Utf8ToUcs2(this.$store.getters.getBlogNowById.title,true,'\\'),
        content: encode.Utf8ToUcs2(this.$store.getters.getBlogNowById.content,true, '\\'),
        id: this.$store.getters.getBlogNowById.id,
        createTime: this.$store.getters.getBlogNowById.createTime,
        authorId: this.$store.state.userId,
      })
          .then(()=>{
            alert('上传成功')
          })
          .catch(e=>{
            alert(e);
          })
    },
    deleteBlog(){
      let length = this.$store.state.blogList.length;
      axios.post('/server/deleteBlog',{
            id: this.$store.state.blogIdNow,
      })
      for(let i=0;i<length;i++){
        if(this.$store.state.blogIdNow === this.$store.state.blogList[i].id){
          this.$store.state.blogList.splice(i,1,);
          alert('已删除！');
          return;
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@use "@/styles/index.scss"

</style>