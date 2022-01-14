import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

import ahome from "./home/index.js";
import asearch from "./search/index.js";
import adetail from "./detail";

import ashopcart from "./shopcart";

// 验证码
import auser from "./user";


const bbb = new Vuex.Store({
  modules: {
    ahome,
    asearch,
    adetail,
    ashopcart,
    auser
  }
})

export default bbb;