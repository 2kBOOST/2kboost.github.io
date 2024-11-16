// Funkcja do inkrementacji liczników
function incrementCounter(element, target, speed) {
    let count = 0;
    const increment = target / 100000;
    const interval = setInterval(() => {
        if (count < target) {
            count += increment;
            element.innerText = formatNumber(Math.ceil(count));
        } else {
            clearInterval(interval);
        }
    }, speed);
}

// Funkcja do formatowania liczb (np. 50k, 500k, 5m)
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'm';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num;
}

// Licznik komentarzy
let commentCount = 0;

// Funkcja do cyklicznego zwiększania licznika komentarzy
function incrementCommentCount() {
    commentCount++;
    document.getElementById("commentCount").innerText = formatNumber(commentCount);
}

// Inicjalizacja wzrastania dla każdego licznika
document.addEventListener("DOMContentLoaded", () => {
    incrementCounter(document.getElementById("views"), 100000, 1);
    incrementCounter(document.getElementById("likes"), 100000, 8);
    incrementCounter(document.getElementById("followers"), 100000, 16);

    // Uruchamiamy wzrastanie licznika komentarzy co 2 sekundy
    setInterval(incrementCommentCount, 150);
});
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const onScroll = () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // wywołaj na początku dla już widocznych elementów
});
// Funkcja do przekierowania na stronę order.html
document.getElementById("orderButton").addEventListener("click", function() {
    window.location.href = "order.html";  // Zmień ścieżkę, jeśli jest w innym folderze
});



// Script to handle accordion behavior
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        accordionItem.classList.toggle('active');
    });
});

// Smooth scroll when clicking on anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get the ID of the target element
        const targetElement = document.getElementById(targetId); // Find the element by ID

        if (targetElement) {
            // Scroll to the target element smoothly
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Scroll to the top of the target element
            });
        }
    });
});
