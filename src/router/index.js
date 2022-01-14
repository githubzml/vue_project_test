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

import Cc from "@/components/Cc";



import store from "@/store"

const router = new VueRouter({
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
    path: "/cc",
    name: "cc",
    component: Cc
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



router.beforeEach((to, from, next) => {
  let token = store.state.auser.token;
  if (token) {
    //防止回退
    if (to.path == '/login') {
      next("/home");
      console.log('token0', token);
    } else {
      next();
      console.log('token1', token);
    }
  } else {
    next();
    console.log('token2', token);
  }
})

export default router;
