<?php 

  include '../../includes/dbh-inic.php';
   $type=$_POST['type'];
   $id = $_POST['id'];
  $hot = "SELECT * FROM hotels  where  user_id= '$id' "; 
  $hotel = $pdo->prepare($hot);
  $hotel->execute();
  $hotels = $hotel-> fetchAll();
   $hotel_id = $hotels[0]['id'];
   echo $hotel_id;
    
   $update= "UPDATE services , hotels SET status=0 where hotel_id='$hotel_id' ";
   $result= $pdo->prepare($update);
   $result->execute();
    

?>