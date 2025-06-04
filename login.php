<?php
// Send proper headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json"); // Important!

// Disable PHP notices/warnings in output (for clean JSON)
error_reporting(0);

// Database config
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "burgerx";

// Connect to database
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Database connection failed"]);
    exit();
}

// Get and decode JSON input
$rawData = file_get_contents("php://input");
$data = json_decode($rawData);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid JSON"]);
    exit();
}

// Escape and fetch data
$email = $conn->real_escape_string($data->email ?? '');
$password = $data->password ?? '';

// Query database
$sql = "SELECT * FROM register WHERE email='$email'";
$result = $conn->query($sql);

// Check login
if ($result && $result->num_rows === 1) {
    $user = $result->fetch_assoc();

    // Plain password check (replace with password_verify for security)
    if ($password === $user['password']) {
        echo json_encode([
            "success" => true,
            "message" => "Login successful",
            "username" => $user['username'] // Ensure this column exists!
        ]);
    } else {
        echo json_encode(["success" => false, "message" => "Incorrect password"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Email not found"]);
}

$conn->close();
?>
