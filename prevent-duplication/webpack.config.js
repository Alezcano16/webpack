const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
//const babel = require('babel-loader');
module.exports = {
    entry:{
        home: path.resolve(__dirname, 'src/js/index.js'),
        contacto: path.resolve(__dirname, 'src/js/contacto.js'),
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer:{
        hot: true,
        open: true,
        port: 9000,
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options:{
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                       limit: 90000,
                    }
                }
              },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            title: 'Webpack-dev-server',
            template: path.resolve(__dirname, 'index.html')
        })
    ],
    optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 0,
          name: 'commons'
        }
      }
}