const logger = require('@luzhongk/node-logger')
const merge = require("webpack-merge")
const baseConfig = require('./webpack.config.base')

const port = 8000

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-model-eval-source-map',
  devServer: {
    after(app, server, compiler) {
      compiler.hooks.done.tap("webpack dev", () => {
        logger.run(port);
      });
    },
    port
  }
})