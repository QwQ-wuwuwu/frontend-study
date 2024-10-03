const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    //指定入口文件
    entry: "./src/study01.ts",

    // 指定打包文件的目录
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin()
    ]
}