const logger = require('@luzhongk/node-logger')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')

const port = 8000

module.exports = merge(baseConfig, {
	mode: 'development',
	devtool: 'cheap-model-eval-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'test-typescript',
		}),
	],
	devServer: {
		after(app, server, compiler) {
			compiler.hooks.done.tap('webpack dev', () => {
				logger.run(port)
			})
		},
		port,
		noInfo: true, // only errors & warns on hot reload
	},
})
