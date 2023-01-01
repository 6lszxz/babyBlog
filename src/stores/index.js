import {createStore} from "vuex";
import {useDark} from "@vueuse/core";

export const store= createStore({
    state(){
        return{
            // blogList: localStorage.getItem('myBlogs'),
            // 所有的博客列表
            blogList:[],
            // 选中的博客id
            blogIdNow: null,
            // 为了防止缺少属性，如果无法查到正常的blog的话就返回这个missingBlog
            missingBlog:{
                title: '错误',
                content:'**没有找到你想要的博客，请重试**',
                id: null,
                createTime: null,
            },
            // 是否为黑暗模式
            isDarkMode: useDark({
                // 存储在本地的key名
                storageKey: 'useDarkKEY',
                // 暗夜模式的class
                valueDark: 'dark',
                // 白天模式的class
                valueLight: 'light',
            }),
            // 白天模式时选择的主题
            themeNow: localStorage.getItem('themeNow'),
        }
    },
    getters:{
        // 根据选中博客id获取blog对象
        getBlogNowById:(state)=>{
            for (let blog of state.blogList){
                if(blog.id === state.blogIdNow){
                    return blog;
                }
            }
            return state.missingBlog;
        },
    },
})