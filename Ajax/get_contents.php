<?php
	//读xml要改header
	header("content-type:text/xml;charset=utf-8");
	// echo file_get_contents("test.txt");
	echo file_get_contents("person.xml");
?>