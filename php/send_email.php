<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@crafti-servi.com"; // Replace with the recipient's email address
    $subject = $_POST["headline"];
    $message = $_POST["message"];
    $headers = "From: " . $_POST["from_email"];
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Email could not be sent.";
    }
}
?>