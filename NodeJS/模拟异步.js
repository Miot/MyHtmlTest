var doSomething = function(callback){
	setTimeout(function(){
		var thing = '123';
		callback(thing);
	},5000);
	console.log('1');
	console.log('2');
	console.log('3');
};

doSomething(function(myDo){
	console.log(myDo);
});