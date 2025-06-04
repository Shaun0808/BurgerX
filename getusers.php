<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");


$conn = new mysqli("localhost", "root", "", "burgerx");

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed."]));
}

$result = $conn->query("SELECT id, name, email,address, created_at FROM register");

$users = [];

while ($row = $result->fetch_assoc()) {
    $users[] = $row;
}

echo json_encode($users);

$conn->close();
?>
