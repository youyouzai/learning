var path = require('path');
var webpack = require('webpack');
var memoryfs = require('memory-fs');

module.exports = (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /\.txt$/,
        use: {
          loader: path.resolve(__dirname, '../src/loader.js'),
          options: {
            name: 'Alice'
          }
        }
      }]
    },
    plugins: [ 
      new HtmlWebpackPlugin({
        title: 'match',//生成的html文件的标题为'match'
        filename: 'index.html'//生成的html文件名称为'index.html'
      })
    ]
  });

  compiler.outputFileSystem = new memoryfs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);

      resolve(stats);
    });
  });
}