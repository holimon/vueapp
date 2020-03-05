import {
    getBreadCrumbList,
    getMenuByRouter,
    getHomeRoute,
    localSave,
    localRead
} from '../libs/utils'

import routers from '../route/routers'
const  homeName = 'dash'

export default {
    state: {
        breadCrumbList: [],
        homeRoute: {},
        local: localRead('local')
    },
    getters: {
        menuList: state => {
            state.menuList = getMenuByRouter(routers)
            return state.menuList
        },
        errorCount: state => state.errorList.length
    },
    mutations: {
        setBreadCrumb(state, route) {
            state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
        },
        setHomeRoute(state, routes) {
            state.homeRoute = getHomeRoute(routes, homeName)
        },
        setLocal(state, lang) {
            localSave('local', lang)
            state.local = lang
        },
    },
    actions: {

    }
}
