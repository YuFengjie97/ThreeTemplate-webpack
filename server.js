const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')() // 因为配置文件改为函数，在node层手动传入env对象
const compiler = webpack(config)

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
)

// 将文件 serve 到 port 3000。
app.listen(process.env.PORT, function () {
  console.log(`Running http://localhost:${process.env.PORT}\n`)
})
