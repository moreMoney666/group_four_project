// const Login = () => import ('@/pages/Login')
const Register = () => import ('@/views/Register')
const Login = ()=>import('@/views/Login')
export default [{
    path: '/register',
    component: Register,
  },
  {
    path:'/login',
    component:Login
  }
]