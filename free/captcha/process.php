<?php

// Twój klucz API z 2Captcha
$apiKey = '7b4474740eae278d5adcfda98bfb4d2a';

// Odpowiedź użytkownika na CAPTCHA
$userAnswer = $_POST['captcha_answer'];

// URL do 2Captcha API (wstaw prawdziwy adres strony)
$pageUrl = 'http://localhost/captcha/index.html';

// Zapytanie do 2Captcha w celu rozwiązania CAPTCHA
$requestUrl = "https://2captcha.com/in.php?key=$apiKey&method=userrecaptcha&googlekey=6LcpEg0UAAAAAPTxqOcohQQU0XpcwnFsUOVr6mRw&pageurl=$pageUrl";

// Wysłanie zapytania do 2Captcha
$response = file_get_contents($requestUrl);
if (strpos($response, 'OK') !== false) {
    $captchaId = substr($response, 3);

    // Oczekiwanie na rozwiązanie CAPTCHA
    sleep(20);  // Zwykle rozwiązanie trwa kilka sekund

    // Odbieranie rozwiązania
    $resultUrl = "https://2captcha.com/res.php?key=$apiKey&action=get&id=$captchaId";
    $result = file_get_contents($resultUrl);

    if (strpos($result, 'OK') !== false) {
        $captchaSolution = substr($result, 3);

        // Sprawdzamy, czy odpowiedź użytkownika jest poprawna
        if (strtolower($userAnswer) == strtolower($captchaSolution)) {
            echo 'correct';  // Odpowiedź poprawna
        } else {
            echo 'incorrect';  // Odpowiedź błędna
        }
    } else {
        echo 'error';  // Błąd podczas rozwiązywania CAPTCHA
    }
} else {
    echo 'error';  // Błąd zapytania do 2Captcha
}
?>
