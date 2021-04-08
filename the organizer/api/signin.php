<?php
include "connect.php";
if (isset($_POST['username'])&&  isset($_POST['password'])){ 

$username = trim($_POST['username']);
$password = trim($_POST['password']);
$password = md5($password);

$query = "SELECT * FROM users WHERE username='$username' AND password='$password' LIMIT 1";
		$results = mysqli_query($connection, $query);
        if (mysqli_num_rows($results) == 1) { 
			$user = mysqli_fetch_assoc($results);
           $id= $user['userid'];
            $_SESSION['id'] = $id;
            $username= $user['username'];
            $_SESSION['username'] = $username;

            echo json_encode(['status' => 'success']);
        }

else {
    echo json_encode(['status' => 'error', 'message' => 'Sorry the inputs are invalid']);


}

}
?>