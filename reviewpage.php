<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "burgerx";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle GET request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT review FROM reviews";
    $result = $conn->query($sql);
    $reviews = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $reviews[] = $row['review'];
        }
    }
    echo json_encode($reviews);
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $review = $data->review;

    $sql = "INSERT INTO reviews (review) VALUES ('$review')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Review added successfully"]);
    } else {
        echo json_encode(["error" => "Error adding review: " . $conn->error]);
    }
}

$conn->close();

?>