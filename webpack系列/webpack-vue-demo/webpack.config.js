var path = require("path");
var webpack = require('webpack')
var HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  context: __dirname,
  entry: {
    index1: path.resolve(__dirname, "src/main.js"),
    index2: path.resolve(__dirname, "src/main1.js"),
    vendors:['vue'],
  },
  output: {
    path: __dirname + "/dist",
    filename: "[id].[name].[chunkhash].js",
    // publicPath: "http://localhost:8080/dist",//添加静态资源, 否则会出现路径错误
  },
  mode: "production",
  module: {
    rules: [
      { test: /.css$/, use: ["style-loader", "css-loader"] },
      {test: /.(jpg|png|gif|svg)$/, use: ['url-loader']},/*解析图片*/
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "kitty",
      template: path.resolve(__dirname, "src/index.html")
    }),
    new VueLoaderPlugin(),
    new ExtractTextPlugin('[name].css')
  ],
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
  },
};
