'use strict'
const http = require('http');
const querystring = require('querystring');
const server = http.createServer();
// 引入url模块
const url = require('url');

server.on('request', (req, res) => {
	// false会把urlObj.query转成对象
	var urlObj = url.parse(req.url, true);
	// 取到路径 eg: '/xxx.html'
	var pathname = urlObj.pathname;
	// 取到传递的参数 eg: '？后的内容'
	var query = urlObj.query;
	if(pathname == '/1.html' && req.method == 'GET'){
		fs.readFile('./1.html', 'utf8', function(err,data){
			res.end(data);
		});
	}else if(pathname == '/2.js' && req.method == 'GET'){
		fs.readFile('./2.js', 'utf8', function(err,data){
			res.end(data);
		});
});
server.listen(4000);