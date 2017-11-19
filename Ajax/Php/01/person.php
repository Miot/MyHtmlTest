<?php
	header("content-type:text/html;charset=utf-8");
	//模拟用户数据
	$personArr = array(
		'jack' =>array('name'=>'jack','age'=>'18'),
		'rose' =>array('name'=>'rose','age'=>'16'),
		'ice'  =>array('name'=>'ice','age'=>'26'),
	);
	// 从post获取提交的数据
	$key=$_POST['name'];
	// 从数组中获取对应的数据
	$onePerson=$personArr[$key];
	echo '<h2>'.$onePerson['age'].'岁的'.$onePerson['name'].'！	欢迎您</h2>'
?>