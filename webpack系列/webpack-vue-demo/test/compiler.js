var path = require('path');
var webpack = require('webpack');
var memoryfs = require('memory-fs');
var getConfig = require('./webpack.config')

module.exports = (fixture, options = {}) => {
  const compiler = webpack(getConfig(fixture));

  compiler.outputFileSystem = new memoryfs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);

      resolve(stats);
    });
  });
}