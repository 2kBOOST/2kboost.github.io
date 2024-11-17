// Pobranie elementów
const tiktokButton = document.getElementById('tiktokButton');
const waitingDiv = document.getElementById('waiting');
const accessDiv = document.getElementById('access');

// Otwiera link do profilu na TikTok i rozpoczyna odliczanie
tiktokButton.addEventListener('click', () => {
    window.open('https://www.tiktok.com/@your_tiktok_profile', '_blank'); // Zmień URL na swój profil
    tiktokButton.disabled = true; // Wyłącz przycisk po kliknięciu
    waitingDiv.classList.remove('hidden'); // Pokaż wiadomość o oczekiwaniu
    simulateWaiting(); // Rozpocznij odliczanie
});

// Symuluje oczekiwanie i automatycznie odblokowuje dostęp
function simulateWaiting() {
    const minWaitTime = 12000; // Minimalny czas oczekiwania (12 sekund)
    const maxWaitTime = 20000; // Maksymalny czas oczekiwania (20 sekund)
    const randomWaitTime = Math.floor(Math.random() * (maxWaitTime - minWaitTime + 1)) + minWaitTime;

    setTimeout(() => {
        waitingDiv.classList.add('hidden'); // Ukryj wiadomość o oczekiwaniu
        accessDiv.classList.remove('hidden'); // Pokaż dostęp
    }, randomWaitTime);
}
