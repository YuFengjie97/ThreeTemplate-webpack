# ThreeTemplate-webpack
hi,this is a easy demo for three.js to use webpack build,just for learn and pratice

## preview

[template preview](https://yufengjie97.github.io/ThreeTemplate-webpack/)

## install

    pnpm i
## watch(webpack watchMode)
> 修改后会自动打包  

    pnpm run watch
## dev(webpack-dev-server)
> 日常开发环境  

    pnpm run dev

## dev2(webpack-dev-middleware)
> 日常开发环境2，只是与dev配置方式不同  

    pnpm run dev2

## build(prodcution)
    pnpm run build

## 关于env文件的使用
1. 首先需要安装这两个依赖 `pnpm i cross-env dotenv -D`，corss-env负责在script命令行配置NODE_ENV变量，dotenv根据NODE_ENV变量去加载对应的.env.xxx文件
2. 在package.json script中命令行头部添加`cross-env NODE_ENV=xxx webpack yyyyyy`,xxx需要与.env.xxx文件的名字相同
3. 使用dotenv根据NODE_ENV值加载对应的.env.xxx文件（xxx要与文件名相同的原因）

## 使用webpack的方式来区分环境
1. `webpack.common.js`是公用配置
2. 新建`webpack.dev.js，webpack.prod.js`分别对应dev、prod的环境配置
3. `pnpm i webpack-merge -D`使用其来合并配置
4. 修改script命令行添加`--config webpack.xxx.js`对应不同环境的配置

## 关于githubPage部署
1. githubPage可选路径为`root` / `docs`,这里使用`docs`，需要将webpack打包输出路径改为`docs`
2. githubPage是以仓库名来做`publicPath`所以需要在`.env.production`中修改为仓库名