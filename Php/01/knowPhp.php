<?php
	header("content-type:text/html;charset=utf-8");
	echo "hello";
	echo "<br>";
	echo "world";
	echo "<br>";
	echo '<input type="button" value="点击">';
	echo "<br>";
	for($i=0;$i<10;$i++){
		//用"."连接
		echo "test".$i;
		echo "<br>";
	}
?>