import Cookies from 'js-cookie'
import { forEach } from '@/libs/tools'
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
          path: item.path,
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

export const localSave = (key, value) => {
  localStorage.setItem(key, value)
}

export const localRead = (key) => {
  return localStorage.getItem(key) || ''
}