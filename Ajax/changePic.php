<?php
	$key =$_POST["name"];
	$picArr = array(
		'a' => array("images/a.jpg","a.jpg"), 
		'b' => array("images/b.jpg","b.jpg"), 
		'c' => array("images/c.jpg","c.jpg"), 
	);
	echo $picArr[$key][0];
	// 添加分隔符
	echo "|";
	echo $picArr[$key][1];
?>