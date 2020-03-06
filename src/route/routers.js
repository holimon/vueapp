export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/views',
        name: 'main',
        component: () => import('../views/main.vue'),
        children: [
            {
                path: '/views',
                name: 'views',
                meta: {
                    icon: 'ios-home',
                    title: '{{sidemenu.MenuDashboard}}'
                },
                component: () => import('../views/home.vue')
            },
            {
                path: '/views/files',
                name: 'files',
                meta: {
                    icon: 'ios-folder',
                    title: '{{sidemenu.MenuFiles}}'
                },
                component: () => import('../views/files.vue')
            },
            {
                path: '/views/process',
                name: 'process',
                meta: {
                    icon: 'md-swap',
                    title: '{{sidemenu.MenuProcess}}'
                },
                component: () => import('../views/process.vue')
            },
            {
                path: '/views/resources',
                name: 'resources',
                meta: {
                    icon: 'ios-podium',
                    title: '{{sidemenu.MenuResource}}'
                },
                children:[
                    {
                        path:'/views/resources/cpu',
                        name:'cpu',
                        meta:{
                            icon:'ios-podium',
                            title:'{{sidemenu.MenuResource}}',
                            component: () => import('../views/resources.vue')
                        }
                    },
                    {
                        path:'/views/resources/mem',
                        name:'mem',
                        meta:{
                            icon:'ios-podium',
                            title:'{{sidemenu.MenuResource}}',
                            component: () => import('../views/resources.vue')
                        }
                    }
                ]
            }
        ]
    }
]