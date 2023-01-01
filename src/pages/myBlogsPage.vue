<template>
  <!-- 侧边栏，展示我的所有博客并且新建博客 -->
  <el-aside>
    <show-my-blogs/>
  </el-aside>
  <!-- 主页面-->
  <el-container v-if="$store.state.blogIdNow">
    <el-main>
      <el-container >
        <!-- 写博客-->
        <el-aside class="blogWritingArea">
          <el-input
            type="text"
            resize="none"
            maxlength="20"
            v-model="$store.getters.getBlogNowById.title"
          >
          </el-input>
          <el-divider></el-divider>
          <!-- 博客正文-->
          <el-input
              type="textarea"
              resize="none"
              v-model="$store.getters.getBlogNowById.content"
              class="blogWriting"
              input-style="height:92%"
          >
          </el-input>
        </el-aside>
        <!-- 预览页面-->
        <el-main class="blogView">
          <div v-html="blogView"></div>
        </el-main>
      </el-container>
    </el-main>
    <!-- 博客信息 -->
    <el-footer>
      <blog-status/>
    </el-footer>
  </el-container>
  <!-- 如果没有选中的博客，那么就显示这个-->
  <el-empty v-else class="pleaseChooseBlog">
  请选择博客
  </el-empty>
</template>

<script>
import {marked} from 'marked'
import ShowMyBlogs from "@/components/showMyBlogs";
import BlogStatus from "@/components/blogStatus";

export default {
  name: "myBlogsPage",
  components: {BlogStatus, ShowMyBlogs},
  data(){
    return{
    }
  },
  watch:{
  },
  computed:{
    // 根据博客的内容获取渲染的markdown HTML
    blogView(){
      return marked.parse(this.$store.getters.getBlogNowById.content);
    },
  },
  methods:{
  },
}
</script>

<style lang="scss">
@use "element-plus/theme-chalk/src/common/var";

.pleaseChooseBlog{
  position: absolute;
  left: 50%;
  top: auto;
}
.blogWritingArea{
  left: 0;
  top: 0;
  width: 50%;
  height: 49em;
  overflow: hidden;
}
.blogWriting{
  height: 100%;
  width: 100%;
  padding: 0 0 0 0;
  border: 0;
}
.blogView > * {
  padding: 0 0 0 0;
  margin: 0;
  border: 0;
  overflow: visible auto;
  word-wrap: break-word;
  width: 100%;
  height: 46rem;
}

el-divider{
  height: 50%;
}

</style>