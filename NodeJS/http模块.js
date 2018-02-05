'use strict'
const http = require('http');
// 创建一个服务器实例，创建的是 http.Server 对象
const server = http.createServer();
// 监听 request 事件 ( request请求报文   response响应报文 )
server.on('request',function( request, response ){
	// 写入报文头
	response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
	// 写入报文体
	response.write('hello');
	response.end();
});
server.listen(4000);

