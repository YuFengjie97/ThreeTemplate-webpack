const path = require('path')

console.log('__dirname',__dirname);

console.log('join',path.join(__dirname, '../img.png'));

console.log('resolve',path.resolve(__dirname, '../img.png'));

console.log('src',path.resolve(__dirname, './src/'));