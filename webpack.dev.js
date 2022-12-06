const { resolve } = require('path')
const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

const PUBLIC_PATH = '/'
const PORT = 8080
const outputDir = './dist'

const config = merge(common,{
  mode: 'development',
  output: {
    publicPath: PUBLIC_PATH,
    path: resolve(__dirname, outputDir)
  },
  devServer: {
    static: resolve(__dirname, outputDir),
    port: PORT
  },
  devtool: 'inline-source-map',
})

module.exports = config