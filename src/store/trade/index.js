import { reqTradeInfo, reqUserAddressList } from "@/api"

const state = {
    tradeInfo: {},
    userAddressList: []
}
const mutations = {
    RECEIVE_TRADEINFO(state, tradeInfo) {
        state.tradeInfo = tradeInfo
    },
    RECEIVE_USERADDRESSLIST(state, userAddressList) {
        state.userAddressList = userAddressList
    }
}
const actions = {
    async getTradeInfo({ commit }) {
        const result = await reqTradeInfo()
        if (result.code === 200) {
            commit('RECEIVE_TRADEINFO', result.data)
        }
    },

    //获取收货地址
    async getUserAddressList({ commit }) {
        const result = await reqUserAddressList()
        if (result.code === 200) {
            commit('RECEIVE_USERADDRESSLIST', result.data)
        }
    }
}
const getters = {

}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}