<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "burgerx");

$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"];
$age = $data["age"];
$address = $data["address"];
$joining_date = $data["joining_date"];
$salary = $data["salary"];

if ($name && $age && $address && $joining_date && $salary) {
    $stmt = $conn->prepare("INSERT INTO employees (name, age, address, joining_date, salary) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sisss", $name, $age, $address, $joining_date, $salary);

    if ($stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
}

$conn->close();
?>
