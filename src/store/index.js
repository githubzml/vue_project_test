import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

import ahome from "./home/index.js";
import asearch from "./search/index.js";
import adetail from "./detail";


const bbb = new Vuex.Store({
  modules: {
    ahome,
    asearch,
    adetail
  }
})

console.log('bbb', bbb);


export default bbb;