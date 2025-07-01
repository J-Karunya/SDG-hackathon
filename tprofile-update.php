<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $teacher_id = 1; // Replace this with dynamic session-based ID
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $username = $_POST['username'];

    $sql = "UPDATE Users SET name='$name', phone='$phone', email='$email', username='$username' WHERE id=$teacher_id AND user_type='teacher'";

    if ($conn->query($sql) === TRUE) {
        echo "Profile updated successfully.";
        header("Location: tprofile.php"); // Redirect back to the profile page
    } else {
        echo "Error updating profile: " . $conn->error;
    }
}

$conn->close();
?>
