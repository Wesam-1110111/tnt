<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // الحصول على البيانات من النموذج
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // التحقق من صحة البريد الإلكتروني
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // إعداد بيانات البريد
        $to = "your_email@example.com"; // استبدل بـ بريدك الإلكتروني
        $subject = "New Message from $name";
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        $headers = "From: $email";

        // إرسال الرسالة
        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send the message. Please try again later.";
        }
    } else {
        echo "Invalid email address.";
    }
} else {
    echo "Invalid request method.";
}
?>
