const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.export = merge(common, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
})
