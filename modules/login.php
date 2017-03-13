<?php
	header("Access-Control-Allow-Origin:*");
	header("Content-type:text/html;charset-utf-8");
	
	$inputEmail=$_POST["inputEmail"];
	$inputPassword=$_POST["inputPassword"]
	
	$connection = mysql_connect("bdm264098114.my3w.com", "bdm264098114", "Bleach10fandui");
	my_select_db("reactuser");
	
	$sql = "SELECT * FROM reactuser WHERE inputEmail='$inputEmail' AND inputPassword='$inputPassword'";
	// 发送 SQL 语句执行
	$result = mysql_query($sql, $connection);
	// 得到查询结果集中的行
	$row = mysql_fetch_array($result, MYSQL_ASSOC);
	if (!$row) {
		echo "用户名或密码错误";
	} else {
		echo "登录成功<br>";
		echo json_encode($row);
	}
		mysql_close($db);
	
?>