const merge = require("webpack-merge")
const baseConfig = require('./webpack.config.base')
const { resolve } = require('./utils')

module.exports = merge(baseConfig, {
  output: {
    path: resolve('lib'),
    filename: '[name].js',
    library: 'kuan-[name]',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  mode: 'production'
})