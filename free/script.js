// Pobranie elementów
const instagramButton = document.getElementById('instagramButton');
const waitingDiv = document.getElementById('waiting');
const accessDiv = document.getElementById('access');

// Otwiera link do profilu na Instagramie i rozpoczyna odliczanie
instagramButton.addEventListener('click', () => {
    window.open('https://www.instagram.com/your_instagram_profile', '_blank'); // Zmień URL na swój
    instagramButton.disabled = true; // Wyłączenie przycisku po kliknięciu
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


function updateRewardDetails() {
    const rewardType = document.getElementById('rewardType').value;
    const rewardValueInput = document.getElementById('rewardValue');

    if (rewardType === 'instagram') {
        rewardValueInput.value = 25; // Followers for Instagram
    } else if (rewardType === 'tiktok') {
        rewardValueInput.value = 1000; // Views for TikTok
    }
}

function redeemReward() {
    const rewardType = document.getElementById('rewardType').value;
    const rewardValue = document.getElementById('rewardValue').value;
    const rewardLink = document.getElementById('rewardLink').value;

    alert(`Odbierasz ${rewardValue} ${rewardType === 'instagram' ? 'Instagram followers' : 'TikTok views'} dla linku: ${rewardLink}`);
}

function closeRewardWindow() {
    document.getElementById('rewardWindow').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
