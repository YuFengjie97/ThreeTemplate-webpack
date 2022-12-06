const { resolve } = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const PUBLIC_PATH = '/ThreeTemplate-webpack/'
const outputDir = './docs'

const config = merge(common, {
  mode: 'production',
  output: {
    publicPath: PUBLIC_PATH,
    path: resolve(__dirname, outputDir),
  },
})

module.exports = config
