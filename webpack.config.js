const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: false,
    stats: {
        errorDetails: true
    },
    entry: {
        popup: './src/popup.js',
        background: './src/background.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/manifest.json" },
                { from: "src/popup.html" },
                { from: "src/styles.css" },
                { from: "src/icons", to: "icons", noErrorOnMissing: true }
            ],
        }),
        new Dotenv({
            path: './.env',
            safe: false,
            systemvars: true,
            defaults: false,
            prefix: 'process.env.'
        })
    ]
};