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
        alias: {
            "example_utils": path.resolve(__dirname, "node_modules/example_utils/dist/js"),
            "game-core": path.resolve(__dirname, "node_modules/game-core/release/js"),
        },
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
        contentBase: path.resolve(__dirname, "./dist"),
        publicPath: "/dist",
        host: "0.0.0.0",
        port: 8085,
        open: false,
    },
}