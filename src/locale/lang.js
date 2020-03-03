import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from '@/locale/lang/zh-CN'
import enUS from '@/locale/lang/en-US'

Vue.use(VueI18n)
const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
let lang = localLang || 'zh-CN'
Vue.locale = () => {}
const messages = {
    'zh-CN':zhCN,
    'en-US':enUS
}
const i18n = new VueI18n({
    locale:lang,
    messages,
    silentTranslationWarn:true
})

export default i18n
