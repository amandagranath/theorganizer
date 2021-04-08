<?php
include "connect.php";
if(isset($_POST['firstname']) && isset($_POST['lastname']) &&isset($_POST['username'])&&  isset($_POST['password'])){

$firstname = trim($_POST['firstname']);
$lastname = trim($_POST['lastname']);
$username = trim($_POST['username']);
$password = trim($_POST['password']);
$password = md5($password);

$check_username = "SELECT * FROM users WHERE username='$username'";
$result1 = mysqli_query($connection, $check_username);


if (mysqli_num_rows($result1) > 0) {
    echo json_encode(['status' => 'error', 'message' => 'Sorry this username is already taken']);
return;
}
else{
    $query = "INSERT INTO users (firstname, lastname, username,  password) 
             VALUES ('$firstname','$lastname','$username', '$password')";
    $results = mysqli_query($connection, $query);
}
if($query){
echo json_encode(['status' => 'success', 'message' => 'Account created you can now log in!']);
}
}
?>