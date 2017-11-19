<?php
	//php中的数组
	$myArray =array("aaa","bbb","ccc");
	echo $myArray[0];
	echo "<br>";
	// 关系型数组
	$person = array("name"=>"admin","age"=>"1");
	echo $person["name"];
	echo "<br>";
	// 二维数组
	$twoArray =array(array("A","B","C"),array("AA","BB","CC"),array("AAA","BBB","CCC"));
	echo $twoArray[0][0];
	echo "<br>";
	// php中输出变量的详细内容
	print_r($twoArray[1]); 
	echo "<br>";
?>