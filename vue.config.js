const path = require('path');        //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir)  //path.join(__dirname)设置绝对路径
}
module.exports = {
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // 服务器已经启动后自动打开浏览器
  devServer: {
    open: true,
    proxy: {
      // 本地node测试
      //   '/api': {
      //     target: 'http://localhost:3000',
      //     pathRewrite: { "^/api": "" },
      //     ws: true, //用于支持webscoket
      //     changeOrigin: true //用于控制请求中的host值
      //   },
      // }

      '/api': {
        target: 'http://82.156.11.187',
        // pathRewrite: { "^/api": "" },
        ws: true, //用于支持webscoket
        changeOrigin: true //用于控制请求中的host值
      },
    }
  },
  // 关闭语法检测
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('./src'))
      .set('assets', resolve('./src/assets'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('src/views'))
  }
}