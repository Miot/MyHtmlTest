const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// 生成Source Maps
	devtool: 'eval-source-map',
	// 入口文件
	entry: __dirname + '/app/main.js',
	// 打包后输出文件
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	},
	// 构建本地服务器
	devServer: {
    contentBase: "./public",// 本地服务器所加载的页面所在的目录
    historyApiFallback: true,// 不跳转
    inline: true// 实时刷新
    hot: true// 热加载
  	},
  	// loaders是在打包构建过程中用来处理源文件的（JSX，Scss，Less..），一次处理一个
  	module: {
  		rules:[
  			// 配置 Babel
  			{
  				// 匹配正则
  				test: /(\.jsx|\.js)$/,
  				use: {
  					loader: 'babel-loader'
  				},
  				// 忽略的文件夹
  				exclude: /node_moudles/
  			},
  			// 配置 css-loader 和 style-loader
  			{
  				// 匹配正则
  				test: /\.css$/,
  				use: [
  					{loader: 'style-loader'},
  					{loader: 'css-loader',
					 options: {
                        modules: true // 指定启用css modules
                     }
  					},
  					{loader: "postcss-loader"}
  				]
  			}

  		]
  	},

  	// 插件并不直接操作单个文件，它直接对整个构建过程其作用
  	plugins: [
        // 版权声明的插件
        new webpack.BannerPlugin('我是版权声明插件'),
        // 根据模板 自动生成 index.html
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin()
    ],
};