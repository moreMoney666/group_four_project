// const Login = () => import ('@/pages/Login')
const Register = () => import ('@/views/Register')
const Login = ()=>import('@/views/Login')
const Home = ()=>import('@/views/Home')
export default [{
    path: '/register',
    component: Register,
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/home',
    component:Home
  }
]