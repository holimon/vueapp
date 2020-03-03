import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: () => import('../views/main.vue'),
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('../views/home.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/login.vue')
        }
    ]
})

export default router
