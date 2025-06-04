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
$name = $conn->real_escape_string($data['customer_name']);
$amount = $data['amount'];

// ✅ Basic validation
if (empty($name) || !is_numeric($amount) || $amount <= 0) {
    echo json_encode(["success" => false, "error" => "Invalid input"]);
    $conn->close();
    exit;
}

$sql = "INSERT INTO orders (customer_name, amount) VALUES ('$name', $amount)";
if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $conn->error]);
}


$conn->close();
?>
