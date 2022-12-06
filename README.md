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
> 日常开发环境，只是与dev配置方式不同，没有其他区别  

    pnpm run dev2

## build(prodcution)
    pnpm run build

## 关于env文件的使用
1. `pnpm i cross-env dotenv -D`
2. 在package.json script中命令行头部添加`cross-env NODE_ENV=xxx`,xxx需要与.env文件的名字相同
3. 使用dotenv根据NODE_ENV值加载对应的.env文件（xxx要与文件名相同的原因）

## 关于githubPage部署
1. githubPage可选路径为`root` / `docs`,这里使用`docs`，需要将webpack打包输出路径改为`docs`
2. githubPage是以仓库名来做`publicPath`所以需要在`.env.production`中修改为仓库名