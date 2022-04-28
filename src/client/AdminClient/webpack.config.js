const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const loginHtml = new HtmlWebpackPlugin({template: "./src/login.html", filename: "login/index.html", chunks: ["login"]});
const homeHtml = new HtmlWebpackPlugin({template: "./src/home.html", filename: "home/index.html", chunks: ["home"]});

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        login: "./src/ts/login.ts",
        home: "./src/ts/home.ts"
    },
    output: {
        filename: "[name]/js/[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js' ],
    },
    plugins: [
        loginHtml,
        homeHtml
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "public")
        },
        port: 5000
    }
}
