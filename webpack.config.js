var path = require('path');
var webpack = require('webpack');
var libraryName = 'Aviya';

module.exports = {
    entry: path.resolve(__dirname, 'src/Aviya'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'Aviya.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
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
