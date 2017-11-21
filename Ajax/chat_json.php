<?php
	//读取json文件
	$str = file_get_contents("message.json");
	//将json（字符串）转化为php对象（数组）
	$data = json_decode($str);//解码 string→php(arr)  //json_encode($str);   编码 php→string
	//print_r($data);
	//获取随机key
	$randomKey = array_rand($data,1);
	echo $data[$randomKey];
?>