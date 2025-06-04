<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$host = "localhost";
$db = "burgerx";
$user = "root";
$pass = "";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die(json_encode(["success" => false, "error" => "Connection failed"]));
}

$data = json_decode(file_get_contents("php://input"), true);
$username = $conn->real_escape_string($data['username']);
$password = $data['password'];

$sql = "SELECT * FROM admins WHERE username = '$username' LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    $admin = $result->fetch_assoc();
    if ($password === $admin['password']) {
        echo json_encode(["success" => true]);
    }else {
        echo json_encode(["success" => false, "error" => "Incorrect password"]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Admin not found"]);
}

$conn->close();
?>
