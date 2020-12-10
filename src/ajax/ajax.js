//ajax二次封装
import axios from "axios";
import Nprogress from "nprogress";
import "nprogress/nprogress";

const ajax = axios.create({
  baseURL: "/api",
  timeout: 200000,
});
//请求拦截器
ajax.interceptors.request.use(
  function(config) {
    Nprogress.start();
    return config;
  },
  function(err) {
    alert("错误信息" + err.message || "未知错误");
    //
    return new Promise(() => {});
  }
);

//响应拦截器
ajax.interceptors.response.use(
  function(response) {
    Nprogress.done();
    return response.data;
  },
  function(error) {
    Nprogress.done();
    return Promise.reject(error);
  }
);
export default ajax;
