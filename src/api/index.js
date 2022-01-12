// API

import request from "./request.js";

// 引入mock
import mockAjax from './mockRequest'

// 本地node测试

// export const aa = () => {
//   return request({ url: "/student", method: "get" })
// }

// export const getBaseCategoryList = () => {
//   return request({ url: "/getBaseCategoryList", method: "get" })
// }

// http://82.156.11.187/api/product/getBaseCategoryList

// http://82.156.11.187/api/list


export const getBaseCategoryList = () => {
  return request({ url: "/product/getBaseCategoryList", method: "get" })
}

// 获取广告轮播列表
export const reqBanners = () => mockAjax.get('/banners');

// 获取首页楼层列表
export const reqFloors = () => mockAjax.get('/floors');


export const reqGetSaerchinfo = (params) => request({ url: "/list", method: "POST", data: params })


// 6. 获取商品详情数据
export const reqGoodDetailInfoData = (id) => request.get('/item/' + id)

// 7. 添加选中的商品到购物车成功页面
export const reqAddOrUpdateCart = (skuId, skuNum) => request.post(`/cart/addToCart/${skuId}/${skuNum}`)

