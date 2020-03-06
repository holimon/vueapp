import {
    getMenuByRouter,
    localSave,
    localRead
} from '../libs/utils'

import routers from '../route/routers'

export default {
    state: {
        breadCrumbList: [],
        local: localRead('local')
    },
    getters: {
        menuList: () => {
            let res = []
            routers.forEach(element => {
                if (element.name === 'main') {
                    res = getMenuByRouter(element.children)
                }
            });
            return res
        }
    },
    mutations: {
        setLocal(state, lang) {
            localSave('local', lang)
            state.local = lang
        },
    },
    actions: {

    }
}
