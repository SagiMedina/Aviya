var path = require('path');
var webpack = require('webpack');
var libraryName = 'Aviya';

module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundel.js',
    },
    module: {
      loaders: [
          {
              test: /\.html$/,
              exclude: /node_modules/,
              loader: 'html'
          },
          {
              test: /\.(js|jsx|es6)$/,
              exclude: /node_modules/,
              loader: 'babel',
              query: {
                  cacheDirectory: true,
                  presets: ['es2015', 'stage-0']
              }
          }
      ]
    }
};
