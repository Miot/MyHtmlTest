<?php
	$myMessage = $_POST['message'];
	//设置随机回复内容
	$robotMessage = array(
					'你好',
					'你叫什么',
					'你是谁'
				);
	//返回随机数组
	$randomKey = array_rand($robotMessage,1);
	echo $robotMessage[$randomKey];
?>