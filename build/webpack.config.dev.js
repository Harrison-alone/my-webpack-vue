const merge = require('webpack-merge');
const baseCinfig = require('./webpack.config.base');
const webpack = require('webpack');


const config = merge(baseCinfig, {
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ]
        }]
    },
    devServer: {
        host: '127.0.0.1',
        port: '8080',
        hot: true,
        open: true,
        overlay: {
            errors: true
        },
        historyApiFallback: true,
        publicPath: '/',
        clientLogLevel: 'none',
        compress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = config;