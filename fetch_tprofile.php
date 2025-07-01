<?php
include 'db_connect.php';

$teacher_id = 1; // Change this dynamically based on session data
$sql = "SELECT name, phone, email, username FROM Users WHERE id = $teacher_id AND user_type='teacher'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $name = $row['name'];
    $phone = $row['phone'];
    $email = $row['email'];
    $username = $row['username'];
} else {
    $name = $phone = $email = $username = "";
}

$conn->close();
?>
