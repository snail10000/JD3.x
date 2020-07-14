import axios from 'axios'
import router from './router'
import store from './store'

//http 全局拦截
//token要放在请求头中

export default function setAxios(){
    axios.interceptors.request.use(config=>{
        if(store.state.token){
            config.headers.token = store.state.token;
        }
        return config;
    });

    // 每次返回数据都会经过这个拦截器
    axios.interceptors.response.use(response=>{
        if(response.status == 200){
            const data = response.data;
            if(data.code == -1){
                //登录过期需要重新登录
                //清空vuex 的token 和 local Storage token 信息
                store.settoken('settoken','');
                localStorage.removeItem('token');
                // 跳转到登录页面
                router.replace({
                    path:'/login'
                })
            }
            return data;
        }
        return response;
    });
}