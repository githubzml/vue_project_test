import { reqGetSaerchinfo } from "@/api";

// asearch

export default {
  namespaced: true,
  state: {
    name: "search",
    num: "2",
    searchList: {}
  },
  mutations: {
    GETSEARCHINFO(state, searchList) {
      state.searchList = searchList;
    }
  },
  actions: {
    async getSearchList({ commit }, params) {
      const res = await reqGetSaerchinfo(params)
      if (res.data.code === 200) {
        commit('GETSEARCHINFO', res.data.data)
      }
    }
  },
  getters: {
    goodsList(state) {
      return state.searchList.goodsList
    },
    attrsList(state) {
      return state.searchList.attrsList || []
    },
    trademarkList(state) {
      return state.searchList.trademarkList || []
    },
  }
  //   attrsList
  //   goodsList
  //   pageNo
  //   trademarkList
  //   pageNo
  // pageSize
  // total
  // totalPages
}