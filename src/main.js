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

Vue.prototype.$baseUrl = 'http://localhost:8080'

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')

