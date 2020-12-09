
//axios二次封装
// 引入axios
import axios from 'axios'

// 引入进度条的插件Nprogress
import Nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
import store from '@/store'
// require('nprogress/nprogress')

const ajax = axios.create({
    baseURL: '/api',
    timeout: 20000,
});

  //请求拦截器
  ajax.interceptors.request.use(function (config) {
    //显示进度条
    Nprogress.start();

    const token =localStorage.getItem('USER_TOKEN')
    if(token){
      config.headers['token'] = token
    }
    return config;
  }, function (error) {
  alert('错误信息:'+error.message || '未知错误')
  //外部不处理这个错误  终端promise链
  return new Promise(()=>{})
  
    // return Promise.reject(error);
  });



//  响应拦截器 
ajax.interceptors.response.use(function (response) {
    //进度条结束
    Nprogress.done()
    
    return response.data;
  }, function (error) {
    Nprogress.done()
    return Promise.reject(error);
  });

  export default ajax;
