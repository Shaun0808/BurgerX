<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";  // Change if necessary
$password = "";      // Change if necessary
$dbname = "Burgerx";  // Change to your database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["message" => "Connection failed: " . $conn->connect_error]));
}

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->name) &&
    isset($data->email) &&
    isset($data->enquiry) &&
    isset($data->userType)
) {
    $name = $conn->real_escape_string($data->name);
    $email = $conn->real_escape_string($data->email);
    $enquiry = $conn->real_escape_string($data->enquiry);
    $userType = $conn->real_escape_string($data->userType);

    $sql = "INSERT INTO enquiries (name, email, enquiry, user_type) 
            VALUES ('$name', '$email', '$enquiry', '$userType')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Enquiry submitted successfully!"]);
    } else {
        echo json_encode(["message" => "Error: " . $conn->error]);
    }
} else {
    echo json_encode(["message" => "Invalid input data"]);
}

$conn->close();
?>
