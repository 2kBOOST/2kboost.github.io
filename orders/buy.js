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
