const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: ['./src/main.js', './src/index.html'],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.html$/, loader: 'html-loader' },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                loader: 'url-loader',
                options: {
                    limit: 6 * 1024,
                    esModule: false,
                    name: '[hash:8]-[name].[ext]'
                }
            },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new vueLoaderPlugin()
    ],
    mode: 'development',
    devServer: {
        // 项目构建后路径
        contentBase: path.join(__dirname, 'src'),
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true,
        hot: true
    },
    resolve: {
        alias: {
            // "vue$": "vue/dist/vue.js"
        },
            // 告诉 webpack 解析模块是去找哪个目录
        modules: [path.join(__dirname, '../node_modules'), 'node_modules']
    }
}