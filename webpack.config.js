const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const styleConfig = require("./src/qwc2-demo-app/styleConfig");

const styleReplacements = Object.keys(styleConfig).map(key => ({search: "@" + key + "@", replace: styleConfig[key], flags: "g"}));
const today = new Date();
const buildDate = today.getFullYear() + "." + String(1 + today.getMonth()).padStart(2, '0') + "." + String(today.getDate()).padStart(2, '0');

module.exports = (env, argv) => {
    const isProd = argv.mode === "production";

    return {
        entry: {
            QWC2App: path.resolve(__dirname, 'src', 'index.jsx')
        },
        output: {
            hashFunction: 'sha256',
            path: path.resolve(__dirname, 'prod'),
            filename: 'dist/QWC2App.js',
            assetModuleFilename: 'dist/[hash][ext][query]'
        },
        watchOptions: {
            ignored: /node_modules(\\|\/)(?!qwc2)/
        },
        devtool: isProd ? 'source-map' : 'eval',
        optimization: {
            minimize: isProd
        },
        devServer: {
            static: [
                {
                    directory: path.resolve(__dirname, 'src/qwc2-demo-app/static'),
                    publicPath: '/'
                }
            ],
            compress: true,
            hot: true,
            port: 8080
        },
        resolve: {
            extensions: [".mjs", ".js", ".jsx"],
            fallback: {
                stream: require.resolve("stream-browserify"),
                buffer: require.resolve("buffer/"),
                path: require.resolve("path-browserify"),
                timers: require.resolve("timers-browserify")
            }
        },
        snapshot: {
            managedPaths: [/(.*(\\|\/)node_modules(\\|\/)(?!qwc2))/]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(argv.mode),
                    BuildDate: JSON.stringify(buildDate)
                }
            }),
            new webpack.NormalModuleReplacementPlugin(/openlayers$/, path.join(__dirname, "qwc2", "libs", "openlayers")),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public/index.html"),
                build: buildDate,
                hash: true
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'src/qwc2-demo-app/static' }
                ]
            })
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        {loader: 'style-loader'},
                        {loader: 'css-loader'},
                        {loader: 'string-replace-loader', options: {multiple: styleReplacements}}
                    ]
                },
                {
                    test: /(.woff|.woff2|.png|.jpg|.gif)/,
                    type: 'asset/inline'
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules(\\|\/)(?!qwc2)/,
                    use: {
                        loader: 'babel-loader',
                        options: { babelrcRoots: ['.', path.resolve(__dirname, 'node_modules', 'qwc2')] }
                    }
                },
                {
                    test: /\.mjs$/,
                    type: 'javascript/auto'
                },
                {
                    test: /\.js$/,
                    enforce: "pre",
                    use: ["source-map-loader"]
                }
            ]
        }
    };
};
