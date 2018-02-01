var fs=require('fs');
// try catch只能捕获同步代码的异常
fs.access('./0sdfsdf2.js',( err )=>{
	try{
  		if( err ) throw err; 
  	}catch( error ){
  		console.log( error );
  	}
  
})
// 同步
try{
	fs.accessSync('./0sdfsdf2.js');
}catch( err ){
	console.log('Sync::::'+err);
}