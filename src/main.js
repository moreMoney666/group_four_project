import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store'
// 引入api
import * as api from '@/api' 
import '@/mock/mockServe.js'
import VueLazyload from 'vue-lazyload'
import { Loading } from 'element-ui'

// 图片引用时需要使用require
Vue.use(VueLazyload,{
  loading:require('./static/loading.gif')
})

Vue.config.productionTip = false

const vm = new Vue({
  beforeCreate() {
    Vue.prototype.$API = api
  },
  render: h => h(App),
  router,
  store
}).$mount('#app') 

export default vm
