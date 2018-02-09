'use strict'
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const server = http.createServer();

server.on('request', function( req, res ){
	if(req.url == '/1.html' && req.method == 'GET'){
		fs.readFile('./1.html', 'utf8', function(err,data){
			res.end(data);
		});
	}else if(req.url == '/2.js' && req.method == 'GET'){
		fs.readFile('./2.js', 'utf8', function(err,data){
			res.end(data);
		});
	}else if(req.url == '/getData' && req.method == 'POST'){
		var data = '';
		req.on('data', function(chunk){
			data = chunk + data;
		});
		req.on('end', function(){
			console.log('原'+data);
			var dataObj = querystring.parse(data);
			console.log(dataObj);
			res.end('123');
		});
		
	};
});
server.listen(4000);

