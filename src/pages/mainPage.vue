<template>
<el-aside>
  <el-menu @click="changeSelectId">
    <el-menu-item v-for="blog of mainBlogs" :key="String(blog.id)" :index="blog.id">
      <h1 class="title">{{blog.title}}</h1>
    </el-menu-item>
  </el-menu>
</el-aside>
<el-main v-html="selectBlogView">
</el-main>
</template>

<script>
import axios from 'axios'
import {marked} from "marked";

export default {
  name: "mainPage",
  data(){
    return{
      mainBlogs:[],
      selectId: null,
    }
  },
  computed:{
    selectBlogView(){
      for(let blog of this.mainBlogs){
        if(blog.id === this.selectId){
          return  marked.parse(blog.content);
        }
      }
      return marked.parse(this.$store.state.missingBlog.content);
    }
  },
  methods:{
    getBlog(){
      axios.get('server/getABlog')
          .then((response)=>{
            this.mainBlogs.push(response.data)
          })
          .catch((e)=>{
            alert(e)
          })
    },
    changeSelectId(index){
      console.log(index)
      this.selectId=index;
    }
  },
  mounted() {
    for(let i=1; i<=3;i++){
      this.getBlog();
    }
  }
}
</script>

<style>
.title{
  margin-left: auto;
  margin-right: auto;
}
</style>