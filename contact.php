<?php
// reCAPTCHA API keys
$siteKey = '6LcM0YopAAAAAFhIxHEWtF8K84-0B9sF59gPr48D';
$secretKey = '6LcM0YopAAAAAAjzK3Q6vWHcUAteZS4uIilRgkXB';

// reCAPTCHA response from the form
$recaptchaResponse = $_POST['g-recaptcha-response'];

// Verify the reCAPTCHA response
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . $secretKey . "&response=" . $recaptchaResponse);
$responseKeys = json_decode($response, true);

// If the reCAPTCHA verification failed
if (!$responseKeys['success']) {
    die('reCAPTCHA verification failed, please try again.');
}

// Form field validation
$formFields = [
    'form_name' => FILTER_SANITIZE_STRING,
    'form_email' => FILTER_SANITIZE_EMAIL,
    'form_phone' => FILTER_SANITIZE_NUMBER_INT,
    'form_message' => FILTER_SANITIZE_STRING,
];

$formData = filter_input_array(INPUT_POST, $formFields);

// If there are any form errors
if (false === $formData) {
    die('There was an error processing your form.');
}

// If the form is empty
if (empty($formData)) {
    die('Form is empty, please fill in all required fields.');
}

// SEND EMAIL
$to = 'connect@valiantbusinesssolutions.com';
$subject = 'New Lead From Main Website Pages';

$message = "Name: {$formData['form_name']}\n";
$message .= "Email: {$formData['form_email']}\n";
$message .= "Phone: {$formData['form_phone']}\n";
$message .= "Message:\n{$formData['form_message']}";

$headers = 'From: ' . $formData['form_email'] . "\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo 'Form submitted successfully.';
} else {
    echo 'There was an error submitting the form.';
}
?>
