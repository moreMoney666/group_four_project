import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolved, rejected) {
    if (resolved === undefined && rejected === undefined) {
        return originPush.call(this, location).catch(() => {})
    } else {
        return originPush.call(this, location, resolved, rejected)
    }
}

VueRouter.prototype.replace = function (location, resolved, rejected) {
    if (resolved === undefined && rejected === undefined) {
        return originReplace.call(this, location).catch(() => {})
    } else {
        return originReplace.call(this, location, resolved, rejected)
    }
}

import routes from '@/router/routes'

const router = new VueRouter({
    mode: 'history',
    routes,
    //切换路由的时候保证跳转到的页面滚动位置在最上方
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router