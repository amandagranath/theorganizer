<?php

include "connect.php";

$userid = ($_SESSION['id']);

  if (isset ($_GET['date'])){
    $date = ($_GET['date']);
    getByDate($userid, $date, $connection);
    
  }
  else {
    return;
  }
  function getByDate ($userid, $date, $connection){
   
    $query = "SELECT * FROM notes where userid = '$userid' and date = '$date'";
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
    echo json_encode (['status' => 'error', 'message' => 'Sorry nothing matches']);
    return;
  }
  else if ($response){
  header('Content-Type: application/json');

  echo json_encode($response, JSON_PRETTY_PRINT);
  }
  

  }
?>