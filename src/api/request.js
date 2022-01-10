import axios from "axios";

// axios 的二次封
const request = axios.create({
    baseURL: '/api',
    timeout: 5000
})

request.interceptors.request.use((config) => {
    return config
})

request.interceptors.response.use((res) => {
    return res;
}, () => {
    return new Promise.reject(new Error('error'))
})

export default request;