var add = function( v1, v2 ){
	return v1 + v2;
}

// 每个都一个module对象// console.log(module);
// console.log(123);//只会打印一次，被读取的时候那次
// module.exports = add;
exports.add = add;  //得到的是一个对象

