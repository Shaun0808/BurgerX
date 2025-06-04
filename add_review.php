<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "burgerx";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$review = $data->review;

$sql = "INSERT INTO burger_reviews (name, review) VALUES ('$name', '$review')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(["name" => $name, "review" => $review]);
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
