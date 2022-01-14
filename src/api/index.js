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

// 8. 获取服务器中的之前添加到购物车中的数据
export const reqShopCartListData = () => request.get('/cart/cartList')

// 9. 更改服务器端购物车中商品的选中与否的状态 
export const reqChangeShopCartInfoState = (skuID, isChecked) => request.get(`/cart/checkCart/${skuID}/${isChecked}`)

// 10. 删除一件购物车的商品
export const reqDelOnShopCartInfo = (skuId) => request.delete(`/cart/deleteCart/${skuId}`)

// 12. 批量删除购物车中选中的商品
export const reqDelSelectedCartInfo = (cartInfo) => request.delete('/cart/batchDeleteCart', cartInfo)

// 11. 获取验证码的请求
export const reqCode = (phone) => request.get(`/user/passport/sendCode/${phone}`)

// 13. 实现用户注册
export const reqRegister = (user) => {
  return request({
    url: '/user/passport/register',
    method: 'post',
    data: user
  })
}

// 14. 实现用户登陆 就可以获取服务器发送过来的token 
export const reqUserLogin = (user) => {
  return request({
    url: '/user/passport/login',
    method: 'post',
    data: user
  })
}

// 根据token获取用户信息
export const reqGetUserInfo = () => {
  return request({
    url: '/user/passport/auth/getUserInfo',
    method: 'get'
  })
}

// 15. 用户登出
export const reqUserLogout = () => {
  return request({
    url: '/user/passport/logout',
    method: 'get'
  })
}
