const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
	mode: 'production',
	output: {
		filename: '[name].js',
		library: 'kuan-[name]',
		libraryTarget: 'umd',
		globalObject: 'this',
		umdNamedDefine: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'test-typescript',
		}),
	],
})
