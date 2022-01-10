import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

import ahome from "./home/index.js";
import asearch from "./search/index.js";


const bbb = new Vuex.Store({
  modules: {
    ahome,
    asearch
  }
})

console.log('bbb', bbb);


export default bbb;