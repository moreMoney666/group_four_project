import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const originPush = VueRouter.prototype.push
// 重写方法
VueRouter.prototype.push = function (location,onComplete=()=>{},onAbort) {
  return originPush.call(this,location,onComplete,onAbort)
}
 const token = localStorage.getItem('USER_TOKEN')
const router = new VueRouter({
  mode:"history",
  routes
})
// router.beforeEach((to, from, next) => {
//   if(to.path === '/personal'){
//     //如果token  存在  
//     if(token){
//       next()
//     }
//     else {
//       // 否则返回  login页面
//       next ('/login')
//     }
//   }
//   else{
//     next()
//   }
// })
export default router