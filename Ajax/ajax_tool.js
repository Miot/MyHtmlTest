// function ajax get(url,data){
// 	var ajax = new XMLHttpRequest;
// 	if(data){
// 		url+='?';
// 		url+=data;
// 	}else{}
// 	ajax.open('get',url);
// 	ajax.send();
// 	ajax.onreadystatechange =function(){
// 		if(ajax.readyState==4&ajax.status==200){
// 			console.log(ajax.responseText);
// 		}
// 	}
// }
// function ajax post(url,data){
// 	var ajax = new XMLHttpRequest;
// 	ajax.open('post',url);
// 	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
// 	if(data){
// 		ajax.send(data);
// 	}else{
// 		ajax.send();
// 	}
// 	ajax.onreadystatechange =function(){
// 		if(ajax.readyState==4&ajax.status==200){
// 			console.log(ajax.responseText);
// 		}
// 	}
// }

//二合一
  /* 参数1：url
	 参数2：数据
	 参数3：请求方法
	 参数4：数据获取成功以后调用的方法*/
function ajax_tool(url,data,method,fn){
	var ajax = new XMLHttpRequest;
	if(method=='get'){
		if(data){
			url+="?";
			url+=data;
		}else{}
			ajax.open(method,url);
			ajax.send();
	}else{
		ajax.open(method,url);
		ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		if(data){
			ajax.send(data);
		}else{
			ajax.send();
		}
	}
	ajax.onreadystatechange =function(){
		if(ajax.readyState==4&ajax.status==200){
			//return ajax.responseText;
			fn(ajax.responseText);
		}
	}
}