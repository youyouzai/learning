var webpack = require('webpack')
module.exports = {
    mode: 'production',
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({"process.env.NODE_ENV": "production"})
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}