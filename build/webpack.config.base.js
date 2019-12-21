const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const { entry } = require('./utils')
const { resolve } = require('./utils')

module.exports = {
  entry: {
    index: resolve('src/index.ts')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}