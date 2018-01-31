var fs = require('fs');

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