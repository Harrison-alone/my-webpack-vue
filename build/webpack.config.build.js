const path = require('path');
const merge = require('webpack-merge');
const baseCinfig = require('./webpack.config.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = merge(baseCinfig, {
    output: {
        filename: 'js/[name].[chunkhash:8].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'vue-style-loader',
                use: 'css-loader'
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('css/styles.css')
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
        runtimeChunk: true
    }
});

module.exports = config;