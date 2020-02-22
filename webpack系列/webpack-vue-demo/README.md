


## 简介

[webpack-vue-demo](https://www.webpackjs.com/) 是为了学习[wepack](https://www.webpackjs.com/)而建立。在[webpack-optimization-demo](https://www.webpackjs.com/) 的基础上，添加了vue框架。
## vue-loader
解析.vue文件
```
// 配置loader
{test: /\.vue$/,use: ["vue-loader"]}
// 配置plugins
const VueLoaderPlugin = require('vue-loader/lib/plugin');
plugins: [new VueLoaderPlugin()]
```
## 运行
```
  #npm run dev // 通过webpack-dev-server启动，包含web服务器
  #webpack  // 通过webpack启动，打包文件到指定目录
```

