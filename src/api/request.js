import axios from "axios";

import nprogress from "nprogress";
import "nprogress/nprogress.css";

import store from "@/store";

// axios 的二次封
const request = axios.create({
    baseURL: '/api',
    timeout: 5000
})

request.interceptors.request.use((config) => {
    if (store.state.adetail.uuid_token) {
        config.headers.userTempId = store.state.adetail.uuid_token;
    }
    if (store.state.auser.token) {
        config.headers.token = store.state.auser.token;
    }
    nprogress.start();
    return config
})

request.interceptors.response.use((res) => {
    nprogress.done();
    return res;
}, () => {
    return new Promise.reject(new Error('error'))
})

export default request;