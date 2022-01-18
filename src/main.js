import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'

import router from "./router"

import TypeNav from "./pages/Home/TypeNav"

import store from "./store"



import "@/mock/MockServer.js";

import 'element-ui/lib/theme-chalk/index.css';

import "swiper/css/swiper.css";



import Carousel from "@/components/Carousel"

import Pagination from "@/components/Pagination"

import * as API from "@/api"



// 注册全局组件的两种写法 
Vue.component(TypeNav.name, TypeNav);

// 轮播图
// Vue.use(Carousel) //不行
Vue.component(Carousel.name, Carousel);

// 分页
Vue.component(Pagination.name, Pagination);

import VueLazyload from 'vue-lazyload'
 


Vue.use(ElementUI);

// Vue.use(VueLazyload,{
//     // loading:
// })


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    beforeCreate() {
        //全局事件总线配置
        Vue.prototype.$bus = this;
        Vue.prototype.$API = API;
    },
    router,
    store
}).$mount('#app')