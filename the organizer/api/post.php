<?php
include "connect.php";
if(isset($_GET['date']) && isset($_POST['content']) &&  isset($_POST['category'])){

$date = ($_GET['date']);
$content = ($_GET['content']);
$time = ($_GET['time']);
$category = ($_GET['category']);
$userid = ($_SESSION['id']);

    $query = "INSERT INTO notes (userid, notetime, date, content,category) 
             VALUES ('$userid', '$time','$date','$content', '$category')";
    $result = mysqli_query($connection, $query);

if($query){
$_SESSION['created'] = "You're note has been posted";
echo json_encode(['status' => 'success', 'message' => 'Yes the note has been added.']);
}
}
?>