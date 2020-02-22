


## 简介

[webpack-html-demo](https://www.webpackjs.com/) 是为了学习[wepack](https://www.webpackjs.com/)而建立。在[webpack-cli-demo](https://www.webpackjs.com/) 的基础上，添加了对静态文件的处理。
## html-webpack-plugin
生成入口html文件，该插件默认有一个html文件模板，webpack输出的js文件会插入到该html文件中。
## js/css/img相关loader
1. js相关
```
// 使用babel-loader
npm install babel-loader babel babel-core

// 配置
{test: /.js$/, use: ['babel-loader']},
```
2.  css相关
```
// 比如less
npm install style-loader  url-loader file-loader less-loader less

// 配置
{test: /.css$/, use: ['style-loader', 'css-loader']
```
3. img相关
```
// 比如url-loader
npm install  url-loader 

// 配置
{test: /.(jpg|png|gif|svg)$/, use: ['url-loader']},
```
## 运行
  #npm run dev // 通过webpack-dev-server启动，包含web服务器
  #webpack  // 通过webpack启动，打包文件到指定目录
```

