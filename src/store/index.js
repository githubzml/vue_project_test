import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

import ahome from "./home/index.js";
import asearch from "./search/index.js";
import adetail from "./detail";

import ashopcart from "./shopcart";

// 验证码
import auser from "./user";

import atrade from "./trade";


const bbb = new Vuex.Store({
  modules: {
    ahome,
    asearch,
    adetail,
    ashopcart,
    auser,
    atrade
  }
})

export default bbb;