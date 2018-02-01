var fs = require('fs');
// 判断文件（夹）是否存在
fs.access('foo.js',(err) => {
	if(err){
		console.log(err ? 'no access!' : 'can read/write');
	}else{
		fs.readFile('foo.js','utf-8',( err, data ) => {
			if(err) throw err;
			console.log(data);
		})
	}
})