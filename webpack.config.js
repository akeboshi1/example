const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./test.ts",
    output: {
        filename: "js/[name].js",
        chunkFilename: `js/[name].js`,
        libraryTarget: "umd",
        globalObject: "this"
    },
    resolve: {
        // alias: {
        //     "@math": path.join(__dirname, "./src/math")
        // },
        extensions: [".ts", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader", options: { allowTsInNodeModules: false }, exclude: "/node_modules/" },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "head",
            title: "图轻播放器",
            template: path.join(__dirname, "./index.html"),
            chunks: ["picatown"]
        }),
    ],
    devServer: {
        writeToDisk: true,
        watchOptions: {
            poll: 1000,
        },
        contentBase: path.resolve(__dirname, "./dist"),
        publicPath: "/dist",
        host: "0.0.0.0",
        port: 8085,
        open: false,
    },
}