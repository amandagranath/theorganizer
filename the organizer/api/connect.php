<?php
session_start();
$db_server = "localhost";
$db_username= "root";
$db_password = "";
$db_mydatabase= "the organizer";
$connection = mysqli_connect("$db_server", "$db_username", "$db_password", "$db_mydatabase") or die("Anslutningen misslyckades");
$conn = new PDO("mysql:host=localhost;dbname=the organizer", "root", "");


?>