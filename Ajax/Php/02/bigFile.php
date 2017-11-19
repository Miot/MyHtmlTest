<?php
	// 让php延迟3s执行
	//sleep(3);
	//print_r($_FILES);
	// Array ( [upFile] => Array ( [name] => black.jpg [type] => image/jpeg [tmp_name] => D:\wamp\tmp\php3FA6.tmp [error] => 0 [size] => 3286 ) )

	// 获取原文件名
	$fileArr = $_FILES['upBigFile'];
	$fileName = $fileArr['name'];
	echo $fileName.'<br>';

	// 获取保存在服务器的位置
	$filePath = $fileArr['tmp_name'];
	echo $filePath.'<br>';

	//保存提交的原文件
	move_uploaded_file($filePath,'./'.$fileName);
?>