<template>
<el-aside>
  <el-menu @select="changeSelectId" class="blogList">
    <el-menu-item v-for="blog of mainBlogs" :key="String(blog.id)" :index="blog.id">
      <h1 class="title">{{blog.title}}</h1>
    </el-menu-item>
  </el-menu>
</el-aside>
<el-container>
  <el-main v-html="selectBlogView" class="blogView"></el-main>
  <el-footer>
    <BlogFunctions/>
  </el-footer>
</el-container>

</template>

<script>
import axios from 'axios'
import {marked} from "marked";
import BlogFunctions from '@/components/blogFunctions';

export default {
    name: "mainPage",
    data() {
        return {
            mainBlogs: [],
            selectId: null,
        };
    },
    computed: {
        selectBlogView() {
            for (let blog of this.mainBlogs) {
                if (blog.id === this.selectId) {
                    return marked.parse(blog.content);
                }
            }
            return marked.parse(this.$store.state.missingBlog.content);
        }
    },
    methods: {
        getBlog() {
            axios.get("/server/getABlog")
                .then((response) => {
                this.mainBlogs.push(response.data);
            })
                .catch((e) => {
                alert(e);
            });
        },
        changeSelectId(index) {
            console.log(index);
            this.selectId = index;
        }
    },
    mounted() {
        for (let i = 1; i <= 3; i++) {
            this.getBlog();
        }
    },
    components: { BlogFunctions }
}
</script>

<style lang="scss">
@use "@/styles/index.scss"
</style>