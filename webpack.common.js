const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/main.ts"
    },
    stats: {
        modules: false
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.ejs$/,
                use: [
                    {
                        loader: "@testerum/ejs-compiled-loader-webpack4-nodeps",
                        options: {
                            ejsOptions: {
                                compileDebug: true
                            }
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts"]
    },
    devtool: "inline-source-map",
    plugins: [
        new CleanWebpackPlugin([
            path.resolve(__dirname, "dist")
        ])
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    }
};
