// 首先引入的是一些工具方法，下面我们就需要去util文件种看一下有哪些对应的工具方法
var utils = require('./utils');
// 引入webpack模块  
var webpack = require('webpack');
// 引入配置文件
// 这个配置文件中包含了一些dev和production环境的基本配置
var config = require('../config');
// 引入webpack-merge模块。这个模块用于把多个webpack配置合并成一个配置，后面的配置会覆盖前面的配置。
var merge = require('webpack-merge')
// 引入webpack的基本设置，这个设置文件包含了开发环境和生产环境的一些公共配置
var baseWebpackConfig = require('./webpack.base.conf')
// 用于生成html文件的插件
var HtmlWebpackPlugin = require('html-webpack-plugin')
// 这个插件能够更好的在终端看到webpack运行时的错误和警告等信息。可以提升开发体验。
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// 查找一个未使用的端口
//const portfinder = require('portfinder')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
	baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
	module: {
		rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
	},
	// cheap-module-eval-source-map is faster for development
	devtool: '#cheap-module-eval-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': config.dev.env
		}),
		// https://github.com/glenjamin/webpack-hot-middleware#installation--usage
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		// https://github.com/ampedandwired/html-webpack-plugin
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		new FriendlyErrorsPlugin()
	]
})
