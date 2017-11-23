<?php
	$userArr = array("admin","Mio");
	//判断是否存在与数组中
	$isIn = in_array($_POST['name'],$userArr);
	if($isIn){
		echo "用户名已存在";
	}else{
		echo "用户名可用";
	}
?>