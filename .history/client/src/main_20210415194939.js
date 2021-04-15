import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
/** setting auth for axios 
 * http modules for api calls
*/
Vue.prototype.$http = axios; /** Default prototype for the view */
const token = localStorage.getItem("token")

/** If token present 
 * append default axios auth header
*/
if(token){
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
