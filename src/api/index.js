// API

import request from "./request.js";

// 引入mock
import mockAjax from './mockRequest'

export const aa = () => {
  return request({ url: "/student", method: "get" })
}

export const getBaseCategoryList = () => {
  return request({ url: "/getBaseCategoryList", method: "get" })
}

// 获取广告轮播列表
export const reqBanners = () => mockAjax.get('/banners');