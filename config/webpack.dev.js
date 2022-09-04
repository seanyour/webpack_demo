
const {resolve} = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/main.ts",
    output: {
        filename: "scripts/[hash].js",
        path: resolve(__dirname, '../dist'),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader","css-loader",'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg?)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                },
                generator: {
                    filename: 'images/[hash:10][ext][query]'
                }
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
}