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
        console.log('result1', result.data);

        if (result.data.code === 200) {
            commit('RECEIVE_TRADEINFO', result.data.data)
        }
    },

    //获取收货地址
    async getUserAddressList({ commit }) {
        const result = await reqUserAddressList()
        console.log('result2', result.data);

        if (result.data.code === 200) {
            commit('RECEIVE_USERADDRESSLIST', result.data.data)
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