<?php
	header("Access-Control-Allow-Origin:*");
	header("Content-type:text/html;charset-utf-8");

	$db = mysql_connect("bdm264098114.my3w.com", "bdm264098114", "Bleach10fandui");
	mysql_query("SET NAMES 'UTF8'");
	
	if($db){
		// mysql_select_db("bdm266102300_db",$db);
		mysql_select_db("bdm264098114_db",$db);
		// $sql = "SELECT * FROM skill";
		$sql = "SELECT * FROM reactuser";

		$result = mysql_query($sql);

		// $arr = array();
		// $row = mysql_fetch_row($result);  //no need
		// echo json_encode($row);
		$results = array();
		while ($row = mysql_fetch_assoc($result)) {
			$results[] = $row;
			// echo json_encode($row);
		}
		echo json_encode($results);
		mysql_close($db);
	}
?>