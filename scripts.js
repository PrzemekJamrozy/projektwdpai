const cards = document.querySelectorAll('.card');
let isDragging = false;

// Dodanie obsługi przesuwania kart
cards.forEach((card) => {
    let startX = 0;
    let currentX = 0;

    card.addEventListener('mousedown', (event) => {
        isDragging = true;
        startX = event.clientX;
    });

    card.addEventListener('mousemove', (event) => {
        if (!isDragging) return;
        currentX = event.clientX - startX;
        card.style.transform = `translateX(${currentX}px) rotate(${currentX / 20}deg)`;
    });

    card.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;

        // Akceptacja lub odrzucenie
        if (currentX > 100) {
            card.classList.add('liked');
        } else if (currentX < -100) {
            card.classList.add('disliked');
        } else {
            card.style.transform = 'translateX(0) rotate(0)';
        }
    });

    card.addEventListener('mouseleave', () => {
        isDragging = false;
        card.style.transform = 'translateX(0) rotate(0)';
    });
});
