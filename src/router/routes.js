// const Login = () => import ('@/pages/Login')
const Register = () => import("@/views/Register");
const Login = () => import("@/views/Login");
const Home = () => import("@/views/Home");
const Search = () => import("@/views/Search");
const Play = () => import("@/views/Play");
const Personal = () => import("@/views/Personal");
export default [
  {
    path: "/personal",
    component: Personal,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/login",
    component: Login,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem("USER_TOKEN");
      if (token) {
        //已经登录去首页
        next("/");
      } else {
        //没有登录正常访问
        next();
      }
    },
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/video/:bvid",
    component: Play,
  },
  {
    path: "/",
    redirect: "/home",
  },
];
