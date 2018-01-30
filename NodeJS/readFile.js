// 引入模块 fs
var fs = require('fs');
// 读文件
fs.readFile('./foo.js', 'utf-8', function( err, data ){
	console.log(data);
});