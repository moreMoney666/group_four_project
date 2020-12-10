import {reqLogin} from '@/api'
import router from '@/router'

export default{
    state:{
        token: localStorage.getItem('USER_TOKEN') || ""
    },
    mutations:{
        //登录成功
        RECEIVE_USER_TOKEN(state, token) {
            state.token = token
        },
    },
    actions:{
        //登录
         async login ({commit},{phone:mobile,password}){
            const  result = await reqLogin(mobile,password)
            if (result.code === "200") {
                localStorage.setItem('USER_TOKEN',result.data.token)
                commit('RECEIVE_USER_TOKEN',result.data.token)
                router.push('/')

                
            }else if(result.code === "404") {
                alert('手机号未注册');
               

            }
            else if(result.code === '400'){
                alert('密码错误');
            }
            else{  
                throw  new Error(result.message || '登录失败了')
            }
            
        }
    }

}