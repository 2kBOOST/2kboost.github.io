const unitPrice = 0.0025; // Cena za jednego użytkownika

// Funkcja do aktualizacji wartości i ceny na stronie
function updateQuantity(value) {
    document.getElementById('quantity-value').textContent = value;
    const totalPrice = (value * unitPrice).toFixed(2);
    document.getElementById('price-tag').textContent = `$${totalPrice}`;
}

// Funkcja, która aktualizuje typ usługi i platformę
function updateServiceType() {
    const serviceType = document.getElementById('service-type').value;
    const platform = document.getElementById('platform').value;
    const quantity = document.getElementById('quantity').value;

    let priceMultiplier = 1;
    let serviceLabel = '';

    // Wybór ceny i usługi na podstawie platformy i typu usługi
    if (platform === 'instagram') {
        if (serviceType === 'likes') {
            serviceLabel = 'Instagram Likes';
            priceMultiplier = 1; // Cena za Instagram Like
        } else if (serviceType === 'followers') {
            serviceLabel = 'Instagram Followers';
            priceMultiplier = 1.5; // Cena za Instagram Followers
        } else if (serviceType === 'comments') {
            serviceLabel = 'Instagram Comments';
            priceMultiplier = 2; // Cena za Instagram Comment
        }
    } else if (platform === 'tiktok') {
        if (serviceType === 'likes') {
            serviceLabel = 'TikTok Likes';
            priceMultiplier = 1.2; // Cena za TikTok Like
        } else if (serviceType === 'followers') {
            serviceLabel = 'TikTok Followers';
            priceMultiplier = 1.7; // Cena za TikTok Followers
        } else if (serviceType === 'comments') {
            serviceLabel = 'TikTok Comments';
            priceMultiplier = 2.5; // Cena za TikTok Comment
        }
    } else if (platform === 'youtube') {
        if (serviceType === 'likes') {
            serviceLabel = 'YouTube Likes';
            priceMultiplier = 1.3; // Cena za YouTube Like
        } else if (serviceType === 'followers') {
            serviceLabel = 'YouTube Subscribers';
            priceMultiplier = 2.0; // Cena za YouTube Subskrybentów
        } else if (serviceType === 'comments') {
            serviceLabel = 'YouTube Comments';
            priceMultiplier = 2.5; // Cena za YouTube Comment
        }
    }

    // Aktualizacja tekstu i ceny
    const totalPrice = (quantity * unitPrice * priceMultiplier).toFixed(2);
    document.getElementById('price-tag').textContent = `$${totalPrice}`;
    document.getElementById('type').value = serviceLabel; // Aktualizacja typu usługi
}

// Funkcja do wyświetlenia modala
function showModal() {
    const profileLink = document.getElementById('profile-link').value;
    const quantity = document.getElementById('quantity').value;
    const serviceType = document.getElementById('service-type').value;
    const platform = document.getElementById('platform').value;
    const totalPrice = (quantity * unitPrice).toFixed(2);
    const transactionID = `${platform}-${serviceType}-${encodeURIComponent(profileLink)}-${quantity}`;

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
