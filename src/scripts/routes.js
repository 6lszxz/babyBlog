import mainPage from "@/pages/mainPage";
import helpCenter from "@/pages/helpCenter";
import myBlogs from "@/pages/myBlogsPage";
import settingsPage from "@/pages/settingsPage";
import loginPage from "@/pages/loginPage";
import registerPage from "@/pages/registerPage";
import mySpacePage from "@/pages/mySpacePage"

const titlePrefix = '包包博客-'

export const routes = [
    {
        path: '/myBlogs',
        name: 'myBlogs',
        component: myBlogs,
        meta:{
            title: `${titlePrefix}我的博客`
        }
    },
    {
        path: '/home',
        name: 'home',
        component: mainPage,
        meta:{
            title: `${titlePrefix}首页`
        }
    },
    {
        path: '/help',
        name: 'help',
        component: helpCenter,
        meta:{
            title: `${titlePrefix}帮助中心`
        }
    },
    {
        path: '/setting',
        name: 'setting',
        component: settingsPage,
        meta: {
            title: `${titlePrefix}设置`
        }
    },
    {
        path: '/login',
        name: 'login',
        component: loginPage,
        meta:{
            title: `${titlePrefix}登录`
        }
    },
    {
        path: '/register',
        name: 'register',
        component: registerPage,
        meta: {
            title: `${titlePrefix}注册`
        }
    },
    {
        path: '/mySpace',
        name: 'mySpace',
        component: mySpacePage,
        meta:{
            title: `${titlePrefix}个人中心`
        }
    },
    {path: '/', redirect: '/home'}
]