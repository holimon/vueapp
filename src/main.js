import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import i18n from '@/locale/lang'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.use(ViewUI)

Vue.prototype.$http = Axios
const urlSets = {
  production:'http://localhost:8080',
  development:'http://localhost:8088'
}
Vue.prototype.$baseUrl = process.env.NODE_ENV === 'production' ? urlSets.production : urlSets.development

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')

