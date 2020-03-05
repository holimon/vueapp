export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            hideInMenu: true
        },
        component: () => import('../views/login.vue')
    },
    {
        path: '/home',
        meta: {
            hideInBread: true
        },
        component: () => import('../views/main.vue'),
        children: [
            {
                path: 'dash',
                name: 'dash',
                meta: {
                    icon: 'ios-home',
                    title: '{{sidemenu.MenuDashboard}}'
                },
                component: () => import('../views/home.vue')
            }
        ]
    },
    {
        path: '/files',
        component: () => import('../views/main.vue'),
        children: [
            {
                path: 'filespage',
                name: 'filespage',
                meta: {
                    icon: 'ios-folder',
                    title: '{{sidemenu.MenuFiles}}'
                },
                component: () => import('../views/files.vue')
            }
        ]
    },
    {
        path: '/process',
        component: () => import('../views/main.vue'),
        children: [
            {
                path: 'processpage',
                name: 'processpage',
                meta: {
                    icon: 'md-swap',
                    title: '{{sidemenu.MenuProcess}}'
                },
                component: () => import('../views/process.vue')
            }
        ]
    },
    {
        path: '/resources',
        component: () => import('../views/main.vue'),
        children: [
            {
                path: 'resourcespage',
                name: 'resourcespage',
                meta: {
                    icon: 'ios-podium',
                    title: '{{sidemenu.MenuResource}}'
                },
                component: () => import('../views/resources.vue')
            }
        ]
    }
]