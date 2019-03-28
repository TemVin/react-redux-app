
/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/app/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: './src/app/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, 
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name]-[hash:8].[ext]'
                        },
                    },
                ]
            },
        ],
    },
    resolve: {
        modules: ['src', 'node_modules'],
        descriptionFiles: ['package.json'],
        alias: {
          _actions: path.resolve(process.cwd(), 'src/actions'),
          _reducers: path.resolve(process.cwd(), 'src/reducers'),
          _store: path.resolve(process.cwd(), 'src/store'),
          _pages: path.resolve(process.cwd(), 'src/pages'),
          _components: path.resolve(process.cwd(), 'src/components'),
        },
        extensions: ['.js', '.jsx', '.json', '.css', '.less']
    },
    plugins: [htmlPlugin]
};
