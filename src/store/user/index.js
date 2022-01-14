

import { reqCode, reqRegister, reqUserLogin, reqGetUserInfo, reqUserLogout } from "@/api"
import { setToken } from "@/utils/token.js"

export default {
  namespaced: true,
  state: {
    code: "",
    token: "",
    userInfo: {}
  },
  mutations: {
    RECEIVE_CODE(state, code) {
      state.code = code
    },

    USERLOGIN(state, token) {
      console.log('777', token);
      state.token = token
    },

    RECEIVE_USERINFO(state, userInfo) {
      state.userInfo = userInfo
    },

    CLEAR(state) {
      state.token = "";
      state.userInfo = {};
      localStorage.removeItem("TOKEN");
    }
  },
  actions: {
    async getCode({ commit }, phone) {
      let result = await reqCode(phone);
      if (result.data.code == 200) {
        commit('RECEIVE_CODE', result.data.data);
        return result.data.data
      } else {
        return Promise.reject(new Error('failed'))
      }
    },
    async userRegister({ commit }, user) {
      let result = await reqRegister(user);
      if (result.data.code == 200) {
        return "ok";
      } else {
        return Promise.reject(new Error("failed"))
      }
    },
    // 登录获取token
    async userLogin({ commit }, user) {
      let result = await reqUserLogin(user);
      if (result.data.code == 200) {
        commit("USERLOGIN", result.data.data.token)
        console.log('666', result.data.data.token);

        setToken(result.data.data.token);
        return "ok";
      } else {
        return Promise.reject(new Error("failed"))
      }
    },
    // auser
    async userLogout({ commit }) {
      let result = await reqUserLogout();
      if (result.data.code == 200) {
        commit('CLEAR');
        return "ok";
      } else {
        return Promise.reject(new Error("failed"))
      }
    },
    // 获取用户信息
    async getUserInfo({ commit }) {
      let result = await reqGetUserInfo();
      if (result.data.code == 200) {
        commit('RECEIVE_USERINFO', result.data.data)
        return "ok"
      } else {
        return Promise.reject(new Error("failed gaga"))
      }
    }
  },
}