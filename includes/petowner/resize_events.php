<?php
$id = $_POST['id'];
$title = $_POST['title'];
$start = $_POST['start'];
$end = $_POST['end'];
$days =$_POST['days'];
$petownerId=$_POST['petownerid'];
try {
   require '../dbh-inic.php';
} catch(Exception $e) {
	exit('Unable to connect to database.');
}
$sql = "UPDATE petowneravailability SET title='".$title."', start='".$start."', end='".$end."' , days='".$days."' WHERE id='".$id."'";
$q = $pdo->prepare($sql);
$q->execute();
?>
