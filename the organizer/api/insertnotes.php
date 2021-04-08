<?php
include "connect.php";
if(isset($_POST['date']) && isset($_POST['content']) &&  isset($_POST['category'])){

$date = ($_POST['date']);
$content = ($_POST['content']);
$time = ($_POST['time']);
$category = ($_POST['category']);
$userid = ($_SESSION['id']);

    $query = "INSERT INTO notes (userid, notetime, date, content,category) 
             VALUES ('$userid', '$time','$date','$content', '$category')";
    $result = mysqli_query($connection, $query);

if($query){
$_SESSION['created'] = "You're note has been posted";
echo json_encode(['status' => 'success', 'message' => 'Yes the note has been added. Click on the day to refresh']);
}
}
?>