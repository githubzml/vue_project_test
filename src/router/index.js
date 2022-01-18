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

import Trade from "@/pages/Trade";

import Pay from "@/pages/Pay";




import paySuccess from "@/pages/PaySuccess";

import Center from "@/pages/Center";

import GroupOrder from "@/pages/Center/GroupOrder";
import MyOrder from "@/pages/Center/MyOrder";

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

    // 结算
    {
        path: "/trade",
        name: "Trade",
        component: Trade
    },
    // 支付
    {
        path: "/pay",
        name: "pay",
        component: Pay
    },

    {
        path: "/paySuccess",
        name: "paySuccess",
        component: paySuccess
    },

    // 个人中心
    {
        name: 'center',
        path: '/center',
        component: Center,
        redirect: "/center/myorder",

        // 二级路由不用写 "/"

        children: [
            {
                name: "myorder",
                path: "myorder",
                component: MyOrder,
            },
            {
                name: "grouporder",
                path: "grouporder",
                component: GroupOrder,
            }
        ]
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
    }
    ],
    // Vue-Router 滚动行为
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})



router.beforeEach(async (to, from, next) => {
    let token = store.state.auser.token;
    let aa = store.state.auser.userInfo;
    if (token) {
        //防止回退
        if (to.path == '/login') {
            next("/home");
        } else {
            if (aa.name) {
                // 已经登录了 有用户信息
                next();
            } else {
                //已经登录了 没用户信息
                try {
                    await store.dispatch("auser/getUserInfo");
                    console.log('token3', token);
                    next();
                } catch (error) {
                    await store.dispatch("auser/userLogout");
                    next("/login");
                }
            }
        }
    } else {
        //未登录 先放行 测试
        next();
    }
})

export default router;