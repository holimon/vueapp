import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',redirect: {path:'/login'}
        },
        {
            path:'/login',
            name:'login',
            component:() => import('../views/login.vue')
        },
        {
            path:'/menu',
            name:'menu',
            component:() => import('../components/menus.vue')
        }
    ]
})

export default router
