// const Home =()=> import('@/pages/Home')
import Home from '@/views/Home'
import { Menu } from 'element-ui'
import { Carousel } from 'element-ui'

// import Carousel from 
export default [
    {
        path:'/',
        component:Home,
        children:[
            {
                path:'/menu',
                component:Menu
            },
            {
                path:'/carousel',
                component:Carousel
            }
        ]
    }
]