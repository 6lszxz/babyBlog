<template>
<el-aside>
  <el-menu @click="changeSelectId">
    <el-menu-item v-for="blog of mainBlogs" :key="blog" :index="blog.id">
      {{blog.title}}
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
  computed: {
    selectBlogView(){
      for(let blog of this.mainBlogs){
        if(blog.id === this.selectId){
          return marked.parse(blog.content);
        }
      }
      return marked(this.$store.state.missingBlog.content);
    }

  },
  methods:{
    getBlog(){
      axios.get('http://43.142.78.228:4444/allBlogs')
          .then((response)=>{
            this.mainBlogs.push(response.data)
          })
          .catch((e)=>{
            alert(e)
          })
    },
    changeSelectId(index){
      this.selectId=index;
    }
  },
  mounted() {
    this.getBlog()
  }
}
</script>

<style scoped>

</style>