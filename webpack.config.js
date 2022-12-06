const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = path
const initEnv = require('./initEnv.js')

module.exports = () => {
  initEnv()
  console.log('####env',process.env.NODE_ENV);
  console.log('####publicPath',process.env.PUBLIC_PATH);
  return {
    mode: process.env.NODE_ENV,
    entry: './index.ts',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'docs'),
      clean: true,
      publicPath: process.env.PUBLIC_PATH,
    },
    devtool: 'inline-source-map',
    devServer: {
      static: path.resolve(__dirname, './docs'),
      hot: true,
      port: process.env.PORT
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'ThreeTemplate-webpack',
        template: resolve(__dirname, 'index.html'),
        favicon: resolve(__dirname, 'src/assets/icon.svg'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.less$/i,
          use: ['style-loader', 'css-loader', 'less-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
  }
}
