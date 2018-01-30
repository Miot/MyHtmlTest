function myRequire( path ){
	// 构造函数
	function Module(){
		this.exports = {};
	}
	var fs = require('fs');
	var dataString = fs.readFileSync(path, 'utf-8');
	// 拼接
	var fnString = '(function(exports,module){'+dataString+'return module.exports})';
	// 变成函数
	var fn = eval(fnString);
	// 实例化
	var module = new Module();
	// diaoy
	var obj = fn(module.exports,module);
	return obj;
}

var data = myRequire('./foo.js');
console.log(data.a());