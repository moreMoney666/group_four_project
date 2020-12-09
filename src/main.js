import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import store from '@/store'


import * as api from '@/api'
Vue.config.productionTip = false

// import '@/utils/element-ui'
// import '@/api/index.js'

new Vue({
  beforeCreate() {
    Vue.prototype.$API = api
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
