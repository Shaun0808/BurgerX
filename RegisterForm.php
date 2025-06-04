<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "burgerx";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Handle input
$input = json_decode(file_get_contents('php://input'), true);

if ($input) {
    // JSON input
    $name = $input["name"] ?? null;
    $email = $input["email"] ?? null;
    $address = $input["address"] ?? null;
    $password = $input["password"] ?? null;
} else {
    // FormData input
    $name = $_POST["name"] ?? null;
    $email = $_POST["email"] ?? null;
    $address = $_POST["address"] ?? null;
    $password = $_POST["password"] ?? null;
    // $Lname = $_POST["Lname"] ?? null;
}

if (!$name || !$email || !$address || !$password) {
    die(json_encode(["error" => "Invalid input data"]));
}

// Insert into database
$sql = $conn->prepare("INSERT INTO register (name,email,address,password) VALUES (?, ?, ?, ?)");
if (!$sql) {
    die(json_encode(["error" => "SQL prepare error: " . $conn->error]));
}

$sql->bind_param("ssss", $name, $email, $address, $password);

if ($sql->execute()) {
    echo json_encode(["message" => "Success"]);
} else {
    echo json_encode(["error" => "Execution failed: " . $sql->error]);
}

$sql->close();
$conn->close();
?>
