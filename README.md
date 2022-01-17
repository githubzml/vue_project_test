# 项目介绍/项目说明

## 2022-1-7

### p2

使用Vue-Cli 初始化项目 以便于快速集成开发环境

public webpack  原封不动 打包

components 非路由组建

babel 转译

### p3 项目配置

服务器启动浏览器自动打开

关闭eslint语法检测

vue.config.js 配置文件夹别名

### p4

组件分析

### p5

以业务和逻辑为主

### p6

首页 
登录
注册
搜索四个路由页配置

### p7

路由meta元信息面向程序员

### p8

路由跳转传递参数

### p9

路由的面试题 无

### p10 

push replace 方法 无

### p11 

组件拆分分析 无

## 2022-1-10

### p12

三级联动

### p13

home 首页静态组件的拆分

39.98.123.211

### p14

postman 工具

### p15

axios 的二次封

### p16

跨域的解决方案

1. jsonp 
2. cors (后端) 
3. 代理 前端的webpack 进行代理

### p17

nprogress 进度条

### p18

vuex 模块化开发 无

### p19 

动态展示三级联动

### p20 

三级联动背景颜色 无

### p21

无

### p22

无

### p23

输入框

防抖动 lodash

lodash JS实用工具库

### p24

节流 计数器加加

### p25

让解析器有充裕的时间解析代码 防止出现卡顿的现象 
滑动三级菜单节流

### p26

声明式导航会出现卡顿 返回很多节点 耗内存

编程式导航 + 事件委派 + 自定义属性

相对于之前 减少了 a标签的生成 减少了 绑定事件

### p27

 let ele = event.target; 

 ele.dataset 获取自定义属性

 编程式导航 + 事件委派 + 自定义属性 完成路由跳转传参

### p28

 总结前三节

### p29

search当中的商品分类三级列表

### p30

商品分类接口请求放在首页来执行

### p31

search 合并参数

### p32

mockJs 结合Json文件模拟数据

### p33

获取轮播图数据

### p34

swiper 的基本使用 无

### p35

Vue-Cli swiper6 版本会有问题 一定安装5版本

10.52

## 2022-1-11

### p36

关于 渲染swiper 请求数据问题 watch nextTick

### p37

floor组件 数据返回

### p38

floor组件 数据返回 无

### p39

轮播组件 全局封装

### p40

Search 静态组件 划分
面包屑

### p41

Search 组件接口部分

### p42

Search 中的产品列表展示

### p43

Search 根据不同参数返回不同结果 只能查询一次 其他的还没做呢

### p44

品牌栏

### p45

监听路由变化再次发起请求

### p46

面包屑部分

对象中的某个属性值为undefined 是不会传递给服务器

如果把相应字段变为undefined，当前这个字段不会带给服务器

删除置空query参数 而不删除params 关键字参数

### p47

面包屑处理关键字 

全局事件总线通知清除

### p48 

面包屑处理品牌信息

### p49 

面包屑处理平台售卖属性

### p50

排序上 样式部分
服务器传值
1综合 2价格 asc升序 desc降序
1：asc
1：desc
2：asc
2：desc

计算属性设置图标

阿里云图标 线上的使用

### p51

排序下 逻辑部分

## 2022-1-12

### p52

轮播
分页
日历

通用组件 分页静态组件划分

### p53

排序复习 无

### p54

分页功能分析

很多数据时 数据（1w+）采用分页

分页连续5||7 
pageNo 当前第几个
pageSize 展示多少数据
total 总数
countinues 连续页码数

### p55

分页器计算开始与结束数字

### p56

分页器动态展示

### p57

分页器完成

### p58

分页器添加类名

### p59

开发详情列表
Vue-Router 滚动行为

### p60

产品详情数据获取

### p61

产品详情展示动态数据

### p62

分页器复习 无

### p63

zoom放大镜展示

### p64

路由组件展示商品售卖属性

### p65

产品售卖属性值排他操作

### p66

放大镜下面的轮播

买个服务器 带项目 真费钱 哈哈

~ 兄弟选择器
https://www.cnblogs.com/jf-67/p/8987341.html

### p67

放大镜效果

### p68

购买产品个数的操作

### p69

加入购物车

### p70

加入购物车成功或者失败的

### p71

加入购物车操作

### p72

添加购物车组件

5.2

# 2022-1-13

### p73

路由传递参数 结合 会话存储数据

### p74

购物车静态组件

UUID 游客身份获取购物车信息

### p75

购物车展示数据 
全选功能

### 76

处理产品数量

添加购物车 || 对已有的数据进行修改

### 77 

修改购物车产品数量

### 78

删除购物车产品数量

### 79

修改产品状态 勾选复选框

### 80

复习 无

### 81 

删除全部选中 ===

### 82

全部产品的勾选状态修改 ===

### 83

引入登录页和注册页
 
assets  ~@/assets/images
public 引入图片的两种方式 /imasges

3.23
今天不是很成功啊 

#2022-1-14

### p84

注册业务上

阿里设备服务

给手机推送验证码

### p85

注册业务下

### p86

Vuex 不是持久化的

点击登录按钮 获取服务器的Token

### p87

带着token向服务器要用户信息 但是刷新数据就没了 hah 

### p88

页面刷新的本地token问题

token

### p89

退出登录

### p90

导航守卫的理解

# 2022-1-15

### p91

导航守卫的判断

### p92

导航守卫用户登陆操作 无

### p93

trade 结算的静态组件

大丈夫生居于天地之间
岂能郁郁久居人下

但大丈夫行于乱世
当光明磊落
即使处于逆境
也当屈身守份
以待天时
不可与命抗争也

玉可碎而不可改其白
竹可焚而不可毁其节
身虽死
名可垂以于竹帛也
又何惧载

# 2022-1-16

### p94

获取交易页数据

82.156.11.187

# 2022-1-17

### p95

用户地址信息的展示 无

### p96

交易页面完成 无

### p97

提交订单 但是获取订单信息失败

支付主要是后台

营业执照

### p98

获取订单号 与展示支付信息

### p99

elementUI 使用 无

### p100

微信支付业务 上 

接口 后端生成二维码图片链接 前端转化为二维码

长轮训 查询支付状态 支付中 支付成功 支付失败

### p101

微信支付业务 下

### p102

个人中心
