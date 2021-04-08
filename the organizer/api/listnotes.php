<?php
include "connect.php";

$userid = ($_SESSION['id']);

    $query = "SELECT * FROM notes where userid = $userid";
    $result = mysqli_query($connection, $query);
   $i = 0;
 while  ($row = $result->fetch_array(MYSQLI_ASSOC)){
  $response[$i]['date'] = $row['date'];
  $response[$i]['content'] = $row['content'];
  $response[$i]['time'] = $row['notetime'];
  $response[$i]['category'] = $row['category'];
  $i ++;
 }
 if (empty($response)){
  echo json_encode (['status' => 'error', 'message' => 'No notes']);
  return;
}
 
 header('Content-Type: application/json');
  echo json_encode($response, JSON_PRETTY_PRINT);

 
?>