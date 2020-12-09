import Home from '@/views/Home'
import Search from '@/views/Search'
import Play from '@/views/Play'

export default [
    {
        path:'/home',
        component:Home,

    },
    {
        path:'/search',
        component:Search,
    },  
    {
        path:'/video/:bvid',
        component:Play
    },
    {
        path:'/',
        redirect: '/home'
    }
]