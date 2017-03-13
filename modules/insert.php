<?php
	error_reporting(E_ALL);
	header("Access-Control-Allow-Origin:*");
	header("Content-type:text/html;charset-utf-8");
	// 以 POST 方式获取请求中的用户名与密码
	$username = $_POST["inputEmail"];
	$password = $_POST["inputPassword"];

	$connection = mysql_connect("bdm264098114.my3w.com", "bdm264098114", "Bleach10fandui");

	mysql_select_db("bdm264098114_db", $connection);

	$sql = "INSERT INTO reactuser VALUES (NULL, '$username', '$password')";
	$result = mysql_query($sql);

	if (!$result)
		die ("error : " . mysql_error());

	echo "数据添加成功....";

	mysql_close($connection);
?>