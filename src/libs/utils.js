import Cookies from 'js-cookie'
import {forEach} from '@/libs/tools'
// cookie保存的天数
export const TOKEN_KEY = 'token'

export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}

export const hasChild = (item) => {
  return item.children && item.children.length !== 0
}

/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @returns {Array}
 */
export const getMenuByRouter = (list) => {
  let res = []
  forEach(list, item => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta
      }
      if ((hasChild(item) || (item.meta && item.meta.showAlways))) {
        obj.children = getMenuByRouter(item.children)
      }
      if (item.meta && item.meta.href) obj.href = item.meta.href
      res.push(obj)
    }
  })
  return res
}

/**
 * @param {Array} routeMetched 当前路由metched
 * @returns {Array}
 */
export const getBreadCrumbList = (route, homeRoute) => {
  let homeItem = { ...homeRoute, icon: homeRoute.meta.icon }
  let routeMetched = route.matched
  if (routeMetched.some(item => item.name === homeRoute.name)) return [homeItem]
  let res = routeMetched.filter(item => {
    return item.meta === undefined || !item.meta.hideInBread
  }).map(item => {
    let meta = { ...item.meta }
    if (meta.title && typeof meta.title === 'function') {
      meta.__titleIsFunction__ = true
      meta.title = meta.title(route)
    }
    let obj = {
      icon: (item.meta && item.meta.icon) || '',
      name: item.name,
      meta: meta
    }
    return obj
  })
  res = res.filter(item => {
    return !item.meta.hideInMenu
  })
  return [{ ...homeItem, to: homeRoute.path }, ...res]
}

export const getRouteTitleHandled = (route) => {
  let router = { ...route }
  let meta = { ...route.meta }
  let title = ''
  if (meta.title) {
    if (typeof meta.title === 'function') {
      meta.__titleIsFunction__ = true
      title = meta.title(router)
    } else title = meta.title
  }
  meta.title = title
  router.meta = meta
  return router
}

export const showTitle = (item, vm) => {
  let { title, __titleIsFunction__ } = item.meta
  let useI18n = true
  if (!title) return
  if (useI18n) {
    if (title.includes('{{') && title.includes('}}') && useI18n) title = title.replace(/({{[\s\S]+?}})/, (m, str) => str.replace(/{{([\s\S]*)}}/, (m, _) => vm.$t(_.trim())))
    else if (__titleIsFunction__) title = item.meta.title
    else title = vm.$t(item.name)
  } else title = (item.meta && item.meta.title) || item.name
  return title
}

/**
 * @param {Array} routers 路由列表数组
 * @description 用于找到路由列表中name为home的对象
 */
export const getHomeRoute = (routers, homeName = 'home') => {
  let i = -1
  let len = routers.length
  let homeRoute = {}
  while (++i < len) {
    let item = routers[i]
    if (item.children && item.children.length) {
      let res = getHomeRoute(item.children, homeName)
      if (res.name) return res
    } else {
      if (item.name === homeName) homeRoute = item
    }
  }
  return homeRoute
}

export const localSave = (key, value) => {
  localStorage.setItem(key, value)
}

export const localRead = (key) => {
  return localStorage.getItem(key) || ''
}


/**
 * @description 根据当前跳转的路由设置显示在浏览器标签的title
 * @param {Object} routeItem 路由对象
 * @param {Object} vm Vue实例
 */
export const setTitle = (routeItem, vm) => {
  const handledRoute = getRouteTitleHandled(routeItem)
  const pageTitle = showTitle(handledRoute, vm)
  const resTitle = pageTitle ? `${title} - ${pageTitle}` : title
  window.document.title = resTitle
}
