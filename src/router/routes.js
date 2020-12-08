import Home from '@/views/Home'
import Search from '@/views/Search'

export default [
    {
        path:'/home',
        component:Home,

    },
    {
        path:'/search',
        component:Search,
        meta:{
            isHeaderHidden:true
        }
    },  
    {
        path:'/',
        redirect: '/home'
    }
]