import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import * as API from '@/api'


Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$API = API
  },
  render: h => h(App),
  router
}).$mount('#app')