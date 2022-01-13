import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

import Detail from "@/pages/Detail";

// 购物车
import AddCartSuccess from "@/pages/AddCartSuccess";
// 购物车结算
import ShopCart from "@/pages/ShopCart";



import Test from "@/components/Test";

export default new VueRouter({
  routes: [{
    path: "/home",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/search/:keyword",
    name: "search",
    component: Search
  },

  //详情
  {
    path: "/detail/:id",
    name: "detail",
    component: Detail
  },

  // 购物车

  {
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: AddCartSuccess
  },

  // 购物车结算
  {
    path: "/shopCart",
    name: "shopCart",
    component: ShopCart
  },


  {
    path: "/test",
    name: "test",
    component: Test
  },


  {
    path: "*",
    redirect: "/home"
  }],
  // Vue-Router 滚动行为
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 }
  }
})