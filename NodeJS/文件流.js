const fs = require('fs');
const rs = fs.createReadStream('./1.wmv');
const ws = fs.createWriteStream('./2.wmv');
// rs.pipe(ws);

// 具体过程  data开始  end结束
// rs.on('data',function(chunk){
// 	console.log(chunk.length);
// 	ws.write(chunk);
// });
// rs.on('end',function(){
// 	console.log('结束');
// 	ws.end();
// })

var data = 0;
var stat = fs.statSync('./1.wmv');
var fileSize = stat.size;
console.log('开始');
rs.on('data',function(chunk){
	data = data + chunk.length;
	ws.write(chunk);
	console.log(`${(data/fileSize*100).toFixed(2)}%`);
});
rs.on('end',function(){
	console.log('结束');
	ws.end();
});
