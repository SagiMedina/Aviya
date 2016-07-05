var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src/Aviya'),
    output: {
        path: __dirname,
        filename: 'Aviya.js'
    },
    module: {
        loaders: [
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
