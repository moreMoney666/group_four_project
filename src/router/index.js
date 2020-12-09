import Vue from "vue";
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);
//解决vue-router 3.1版本的push replace的二次点击报错的问题
// const originPush = VueRouter.prototype.push  //先把原来的push函数保存一份
// const originReplace = VueRouter.prototype.replace  //先把原来的replace函数保存一份

//修改路由器原型当中的push为我们自己定义的push
//而我们自己定义的push并没有原来push的功能，我们最终还是使用原来的push功能
//我们只是在原来的功能基础之上加了个判断
VueRouter.prototype.push = function (location, resolved, rejected) {
  if (resolved === undefined && rejected === undefined) {
    return originPush.call(this, location).catch(() => { })
  } else {
    return originPush.call(this, location, resolved, rejected)
  }
}

VueRouter.prototype.replace = function (location, resolved, rejected) {
  if (resolved === undefined && rejected === undefined) {
    return originReplace.call(this, location).catch(() => { })
  } else {
    return originReplace.call(this, location, resolved, rejected)
  }
}


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
 //切换路由的时候保证跳转到的页面滚动位置在最上方
//  scrollBehavior(to, from, savedPosition) {
//     return { x: 0, y: 0 }
//   }
});

export default router;