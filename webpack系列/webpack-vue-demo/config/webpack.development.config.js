var webpack = require('webpack')
module.exports = {
    mode: 'development',
    plugins: [
        new webpack.NameModulePlugin(),
        new webpack.DefinePlugin({"process.env.NODE_ENV": "development"})
    ]
}