// Optional JavaScript for additional functionality, like transitions or form handling
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        // Here, you can redirect to specific order page or show more options
        alert('You selected ' + card.querySelector('h3').innerText);
    });
});

// Przekierowanie po kliknięciu na przyciski
document.getElementById("instagram-btn").addEventListener("click", function() {
    window.location.href = "instagram.html";  // Zmień na odpowiednią stronę
});

document.getElementById("youtube-btn").addEventListener("click", function() {
    window.location.href = "youtube.html";  // Zmień na odpowiednią stronę
});

document.getElementById("tiktok-btn").addEventListener("click", function() {
    window.location.href = "tiktok.html";  // Zmień na odpowiednią stronę
});
