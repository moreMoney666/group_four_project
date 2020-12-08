import Home from "@/views/Home"
import Animation from "@/views/Home/Animation"
import Rank from "@/views/Home/Rank"

export default [
  //每一个路由是一个对象
  {
    path:'/home',
    component:Home
},
  {
    path: '/animation',
    component: Animation,
  },
  {
    path: '/rank',
    component: Rank,
  },
  {
    path: '/',
    redirect: '/home'
  }


]