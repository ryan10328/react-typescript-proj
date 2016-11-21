const path = require('path');
const webpack = require('webpack');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: [
        path.join(__dirname, './app/index.tsx')
    ],

    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './app/templates/index.ejs',
                inejct: 'body'
            }
        )
    ],

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js']
    }
};

module.exports = config;