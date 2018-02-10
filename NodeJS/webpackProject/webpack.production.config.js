const webpack = require('webpack');// 引入 webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');// 引入 webpack插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');// 引入 webpack扩展插件
const CleanWebpackPlugin = require("clean-webpack-plugin");// 去除build文件中的残余文件

module.exports = {
	entry: __dirname + "/app/main.js", 
    output: {
        path: __dirname + "/build",
        filename: "bundle-[hash].js"// 缓存
    },
    devtool: 'null', //注意修改了这里，这能大大压缩打包代码
    devServer: {
    	contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }, {
        	test: /\.css$/, 
        	use: ExtractTextPlugin.extract({ 
        		fallback: "style-loader", 
        		use: [{ 
        			loader: "css-loader", 
        			options: { 
        				modules: true 
        			} 
        		}, { 
        			loader: "postcss-loader" 
        		}], 
        	})
		}] 
	}, 

	plugins: [ 
		new webpack.BannerPlugin('我是版权插件'), 
		new HtmlWebpackPlugin({ template: __dirname + "/app/index.tmpl.html"}), 
		new webpack.optimize.OccurrenceOrderPlugin(), // 为组件分配ID
        new webpack.optimize.UglifyJsPlugin(), // 压缩js
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin('build/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
	],
};

