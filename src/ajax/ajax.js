// axios二次封装
import axios from 'axios';

// 进度条效果
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css'


const ajax = axios.create({
    // 基础路径
    baseURL:'/api',
    // 超时时间
    timeout:20000,
    // headers: {'content-type': 'application/x-www-form-urlencoded'} 
})


// 请求拦截
ajax.interceptors.request.use( (config)=> {
    // 进度条开始
    Nprogress.start()
    return config;
  })


//   响应拦截
ajax.interceptors.response.use( (response) =>{
    // 进度条结束
    Nprogress.done()
    // console.log(response)
    return response.data;
  },  ()=> {
    Nprogress.done()
    // return Promise.reject(error);
    return new Promise(()=>{})
  });


  export default ajax;
