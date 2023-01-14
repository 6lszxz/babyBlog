import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createRouter, createWebHashHistory} from 'vue-router'
import {routes} from "@/scripts/routes";
import {store} from "@/stores";
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/src/var.scss'

const app = createApp(App);


const router = createRouter({
    routes: routes,
    history: createWebHashHistory(),
});

router.beforeEach((to, from, next)=>{
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

app.use(ElementPlus)
    .use(router)
    .use(store)
    .mount('#app')
