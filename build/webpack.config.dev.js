const logger = require('@luzhongk/node-logger')
const merge = require("webpack-merge")
const baseConfig = require('./webpack.config.base')
const { getHtmlPlugins } = require('./utils')

const port = 8000

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-model-eval-source-map',
  plugins: [
    ...getHtmlPlugins()
  ],
  devServer: {
    after(app, server, compiler) {
      compiler.hooks.done.tap("webpack dev", () => {
        logger.run(port);
      });
    },
    port,
    noInfo: true // only errors & warns on hot reload
  }
})