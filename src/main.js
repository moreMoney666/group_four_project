import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import store from '@/store'


import * as api from '@/api'
Vue.config.productionTip = false

import Pagination from '@/components/Pagination'

Vue.component('Pagination',Pagination)

new Vue({
  beforeCreate() {
    Vue.prototype.$API = api
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
