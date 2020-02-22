


## 简介

[webpack-optimization-demo](https://www.webpackjs.com/) 是为了学习[wepack](https://www.webpackjs.com/)而建立。在[webpack-html-demo](https://www.webpackjs.com/) 的基础上，对生成文件进行了优化。
## html-webpack-plugin
生成入口html文件，该插件默认有一个html文件模板，webpack输出的js文件会插入到该html文件中。
## js/css相关优化
1. js -> 提取公共模块
```
// 配置optimization
optimization: {
    noEmitOnErrors: false,
    splitChunks: {
      chunks:'all',
      cacheGroups: {
          commons: {
              name: "commons",
              chunks: "initial",
          }
      }
    }
  }
```
2. js -> 提取第三方插件
```
// 配置entry.vendors
entry: {
    vendors:['vue'],
  },
```
3.  css -> ExtractTextPlugin，提取css片段到单独css文件
4. img
## 运行
  #npm run dev // 通过webpack-dev-server启动，包含web服务器
  #webpack  // 通过webpack启动，打包文件到指定目录
```

