const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { entry } = require('./utils')

module.exports = {
  entry,
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