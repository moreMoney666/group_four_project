import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store'
import api from '@/api'
Vue.config.productionTip = false
import {
  Select,
  Button,
  Input,
  Popover,
  Form ,
  FormItem,
  Pagination,
  Option,
  Upload,
  Message
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(Option)
Vue.use(Select)
Vue.use(Button)
Vue.use(Input)
Vue.use(Popover)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Pagination)
Vue.use(Upload)
Vue.prototype.$message = Message
new Vue({
  beforeCreate() {
    Vue.prototype.$api = api
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
