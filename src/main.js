import Vue from 'vue'
import App from './App.vue'

import router from "./router"

import TypeNav from "./pages/Home/TypeNav"

import store from "./store"

import "@/mock/MockServer.js";

import "swiper/css/swiper.css";

Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')