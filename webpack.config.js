const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './app/index.js',
    module:{
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader'},
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.(js)$/, use: 'babel-loader'},
            {
                test: /\.(glb|gltf)$/,  // Обработка файлов .glb и .gltf
                type: 'asset/resource',
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}