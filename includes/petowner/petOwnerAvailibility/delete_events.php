<?php
$id = $_POST['id'];
  try{
	  require '../dbh-inic.php';
  }catch(PDOException $e){
	  exit('unable to connect to database.');
  }
  $sql = "DELETE from petowneravailibility WHERE id=".$id;
  $q = $pdo->prepare($sql);
  $q->execute();
?>