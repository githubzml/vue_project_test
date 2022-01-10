import axios from "axios";

import nprogress from "nprogress";
import "nprogress/nprogress.css";

// axios 的二次封
const request = axios.create({
    baseURL: '/api',
    timeout: 5000
})

request.interceptors.request.use((config) => {
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