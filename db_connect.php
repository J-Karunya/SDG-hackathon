<?php
$servername = "localhost";
$username = "root"; // Default in XAMPP
$password = "password"; // Default is empty
$dbname = "Database.sql"; // Change this to your actual database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

