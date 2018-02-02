'use strict'
// 异步流程控制（同步的方式 去写 异步代码）
var fs = require('fs');
var rf = function(){
	return new Promise(function( resolve, reject ){
		fs.readFile('./foo.js', 'utf8', ( err, data ) => {
			if (err){
				reject(err);
			}else{
				resolve(data);
			}
		})
	})
}
rf().then(function(data){
	console.log('成功'+data);
},function(err){
	console.log(err);
});