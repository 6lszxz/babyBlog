<template>
  <!-- 展示我的所有博客列表-->
  <el-menu mode="vertical" @select="chooseBlog">
    <el-menu-item v-for="blog of $store.state.blogList" :index="String(blog.id)" :key="blog.id">
      <h1 class="title">{{blog.title}}</h1>
    </el-menu-item>
    <el-button type="primary" @click="createBlog">
      <div class="title">
        新建博客
      </div>
    </el-button>
  </el-menu>
</template>

<script>

export default {
  name: "showMyBlogs",
  data(){
    return{
      count : 1,
    }
  },
  computed:{
  },
  methods:{
    chooseBlog(index){
      this.$store.state.blogIdNow = index;
    },
    createBlog(){
      let blog ={
        id: String(Date.now()),
        title: `新建文章${this.count}`,
        createTime: String(Date.now()),
        content: '',
      };
      this.$store.state.blogList.push(blog);
      this.count++;
    }
  },
  mounted() {

  }

}
</script>

<style scoped>
.title{
  margin-left: auto;
  margin-right: auto;
}
el-button{
  margin-left: auto;
  margin-right: auto;
}

</style>