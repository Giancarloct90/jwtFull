const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './frontend/index.js',
    output: {
        path: path.join(__dirname, 'docs'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 4000
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.html$/i,
            loader: 'html-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/index.html'
        })
    ]
}