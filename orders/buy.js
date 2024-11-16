const unitPrice = 0.0025; // Cena za jednego obserwującego

// Funkcja do aktualizacji wartości i ceny na stronie
function updateQuantity(value) {
    document.getElementById('quantity-value').textContent = value;
    const totalPrice = (value * unitPrice).toFixed(2);
    document.getElementById('price-tag').textContent = `$${totalPrice}`;
}

// Funkcja do wyświetlenia modala
function showModal() {
    const profileLink = document.getElementById('profile-link').value;
    const quantity = document.getElementById('quantity').value;
    const totalPrice = (quantity * unitPrice).toFixed(2);
    const transactionID = `instagram-followers-${encodeURIComponent(profileLink)}-${quantity}`;

    // Ustawienie tekstu z ID transakcji
    document.getElementById('transaction-id-text').textContent = `Transaction ID: ${transactionID}`;

    // Wyświetlenie modala
    const modal = document.getElementById('payment-modal');
    modal.style.display = "block";
}

// Funkcja do zamknięcia modala
function closeModal() {
    const modal = document.getElementById('payment-modal');
    modal.style.display = "none";
}

// Funkcja do przekierowania na Discord
function redirectToDiscord() {
    // Pobieramy dane z formularza
    const profileLink = document.getElementById('profile-link').value;
    const quantity = document.getElementById('quantity').value;
    const totalPrice = (quantity * unitPrice).toFixed(2);
    const transactionID = `instagram-followers-${encodeURIComponent(profileLink)}-${quantity}`;

    // URL webhooka Discorda (zamień go na swój prawdziwy URL webhooka)
    const webhookURL = `https://discord.com/api/webhooks/1307312226633252945/_Xn_fFMzYvRwnYL46S0Lqc_37I42UFIFsGfqOhcbMNkKW6U9G1RX8BAgUmxFY-ahl-fW`;

    // Tworzymy dane JSON, które będziemy wysyłać do Discorda
    const data = {
        content: 'New Purchase!',
        embeds: [
            {
                title: 'Instagram Followers Purchase',
                description: `Followers purchased for: ${profileLink}`,
                fields: [
                    { name: 'Quantity', value: quantity },
                    { name: 'Total Price', value: `$${totalPrice}` },
                    { name: 'Transaction ID', value: transactionID }
                ]
            }
        ]
    };

    // Używamy fetch do wysyłania danych do Discorda
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.ok) {
            window.location.href = "https://discord.com"; // Przekierowanie na Discorda po wysłaniu danych
        } else {
            alert('Error sending data to Discord');
        }
    }).catch(error => {
        alert('Error sending data to Discord: ' + error);
    });
}
