<?php
	$arr = array('name'=>'jsonP.php','method'=>'jsonP');
	$result = json_encode($arr);    // {"name":"jsonP","method":"GET"}
	$a = $_GET['a'];  // fn
	echo $a.'('.$result.')';	  // fn($result)