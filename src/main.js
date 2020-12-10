import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index";
import store from "@/store";
import * as api from "@/api";
import "@/mock/mockServe.js";
Vue.config.productionTip = false;
import {
  Select,
  Button,
  Input,
  Popover,
  Form,
  FormItem,
  // Pagination,
  Option,
  Upload,
  Message,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import VueLazyload from "vue-lazyload";
Vue.use(Option);
Vue.use(Select);
Vue.use(Button);
Vue.use(Input);
Vue.use(Popover);
Vue.use(Form);
Vue.use(FormItem);
// Vue.use(Pagination);
Vue.use(Upload);
Vue.use(VueLazyload, {
  loading: require("./static/loading.gif"),
});

import Pagination from "@/components/Pagination";
Vue.component("Pagination", Pagination);
Vue.prototype.$message = Message;
new Vue({
  beforeCreate() {
    Vue.prototype.$API = api;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
