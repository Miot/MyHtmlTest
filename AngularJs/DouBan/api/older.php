<?php
	// 获取时间戳
	// echo time();
	// echo '<br>';
	// 设置时间格式
	// echo date('Y-m-d',time());
	// 改变时间
	$yesterday = strtotime('-1day',time());
	$yesterday = date('Y-m-d',$yesterday);;
	$url = 'https://moment.douban.com/api/stream/date/'.$yesterday.'?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';
	// 通过php访问数据，再返回给自己的前端
	$result = file_get_contents($url);
	echo $result;


