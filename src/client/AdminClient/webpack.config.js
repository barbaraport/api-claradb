const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const loginHtml = new HtmlWebpackPlugin({template: "./src/login.html", filename: "login/index.html", chunks: ["login"]});
const homeHtml = new HtmlWebpackPlugin({template: "./src/home.html", filename: "home/index.html", chunks: ["home", "global"]});
const folsAccess = new HtmlWebpackPlugin({template: "./src/folsAccess.html", filename: "fols-access/index.html", chunks: ["folsAccess", "global"]});

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        login: "./src/ts/login.ts",
        home: "./src/ts/home.ts",
        global: "./src/ts/global.ts",
        folsAccess: "./src/ts/folsAccess.ts"
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "dist"),
        library: "[name]",
        clean: true,
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(png)$/,
                type: "asset/resource"
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js' ],
    },
    plugins: [
        loginHtml,
        homeHtml,
        folsAccess
    ],
    devServer: {
        watchFiles: ["./src/*"],
        static: {
            directory: path.join(__dirname, "public")
        },
        port: 4000
    }
}
