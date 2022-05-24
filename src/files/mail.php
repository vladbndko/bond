<?php

define('RECAPTCHA_V3_SECRET_KEY', 'YOU_RECAPTCHA_SECRET_KEY');

$token = $_GET['token'];
$action = $_GET['action'];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,'https://www.google.com/recaptcha/api/siteverify');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array('secret' => RECAPTCHA_V3_SECRET_KEY, 'response' => $token)));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$curl_response = curl_exec($ch);
curl_close($ch);
$response = json_decode($curl_response, true);


// Verify the response
if ( $response['success'] === true && $response['action'] === $action && $response['score'] >= 0.5) {
    // Valid submission
    // Settings
    $site_name = trim($_GET['site_name']);
    $admin_email = trim($_GET['admin_email']);
    $form_subject = trim($_GET['form_subject']);

    // Filter form
    $form_data = array_filter($_GET, function ($key) {
        return !in_array($key, ['site_name', 'admin_email', 'form_subject', 'token', 'action']);
    }, ARRAY_FILTER_USE_KEY);

    // Template
    $template = array();
    $template[] = '<div style="background-color:#eee; color:#222;">';
    $template[] = sprintf('<div style="padding: 30px;"><h3>%s</h3>', $form_subject);
    foreach ($form_data as $key => $value) {
        $template[] = sprintf('<strong>%s:</strong> %s<br>', ucfirst($key), $value);
    }
    $template[] = '</div></div>';
    $message = wordwrap(implode(' ', $template), 70);

    // Headers
    $headers = array();
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/html; charset=utf-8';
    $headers[] = sprintf('From: %s <%s>', $site_name, $admin_email);
    $headers = implode("\r\n", $headers);

    // Send email
    mail($admin_email, $form_subject, $message, $headers);

} else {
    // Invalid submission
    http_response_code(422);
    die(json_encode(array('message' => 'reCAPTCHA keys are incorrect')));
}
