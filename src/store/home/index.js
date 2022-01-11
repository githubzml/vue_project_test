import { getBaseCategoryList, reqBanners, reqFloors } from "../../api"


export default {
  namespaced: true,
  state: {
    name: "home",
    num: "1",
    categoryList: [],
    bannerList: [],
    floors: []
  },
  actions: {
    //发起接口请求
    async baseCategoryList(contxt, state) {
      let result = await getBaseCategoryList();
      if (result.data.code == 200) {
        contxt.commit("CATEGORYLIST", result.data.data)
      }
    },

    async getBannerList(contxt, state) {
      let result = await reqBanners();
      if (result.code === 200) {
        contxt.commit('GETBANNERLIST', result.data)
      }
    },

    async receiveFloors({ commit }) {
      const res = await reqFloors()
      if (res.code === 200) {
        commit('RECEIVEFLOORS', res.data)
      }
    },

  },
  mutations: {
    CATEGORYLIST(state, categoryList) {
      state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
      state.bannerList = bannerList
    },
    RECEIVEFLOORS(state, floors) {
      state.floors = floors
    },
  }
}