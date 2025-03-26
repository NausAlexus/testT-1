<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {
        // Обработка первой формы (контактной)
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        if (isset($_POST["privacy"])) {
            $to = "support@" . $_SERVER['HTTP_HOST'];
            $subject = "New Contact Form Submission";
            $body = "Name: $name\nEmail: $email\nMessage: $message\nUser agreed to Privacy Policy.\n";
            $headers = "From: $to \r\n";

            if (mail($to, $subject, $body, $headers)) {
                header("Location: thanks/");
                exit();
            } else {
                echo "Error sending email.";
            }
        } else {
            echo "You must agree to the Privacy Policy.";
        }
    } elseif (isset($_POST["phone"])) {
        // Обработка второй формы (регистрации)
        $phone = $_POST["phone"];

        if (isset($_POST["checkbox"])) {
            $to = "support@" . $_SERVER['HTTP_HOST'];
            $subject = "New Phone Registration";
            $body = "Phone: $phone\nUser agreed to Privacy Policy.\n";
            $headers = "From: $to \r\n";

            if (mail($to, $subject, $body, $headers)) {
                header("Location: thanks/");
                exit();
            } else {
                echo "Error sending email.";
            }
        } else {
            echo "You must agree to the Privacy Policy.";
        }
    } else {
        echo "Invalid form submission.";
    }
}
?>
