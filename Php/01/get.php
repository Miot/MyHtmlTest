<?php
	header("content-type:text/html;charset=utf-8");
	echo "这是get提交后的页面";
	echo "<br>";
	echo "用户名：".$_GET["userName"];
	echo "<br>";
	echo "密 码：".$_GET["pwd"];
?>