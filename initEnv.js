const path = require('path')
const dotenv = require('dotenv')

module.exports = ()=>{
  const envConfig = dotenv.config({
    path: path.resolve(__dirname, `./.env.${process.env.NODE_ENV}`)
  }).parsed;
  
  if (!envConfig) {
    console.log('配置文件不存在');
    process.exit(1);
  }
}