document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.new-arrivals-slider-container');
    const cards = document.querySelectorAll('.new-arrivals-card');
    const cardWidth = cards[0].offsetWidth + 20; // width + margin
    let currentPosition = 0;
    const maxPosition = -(cardWidth * (cards.length - 4)); // Assuming 4 cards visible at a time

    // Navigation buttons (you can add these to your HTML or create them dynamically)
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '❮';
    prevBtn.className = 'slider-btn slider-btn-prev';
    
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '❯';
    nextBtn.className = 'slider-btn slider-btn-next';
    
    const slider = document.querySelector('.new-arrivals-slider');
    slider.insertBefore(prevBtn, slider.firstChild);
    slider.appendChild(nextBtn);

    // Update button states
    function updateButtons() {
        prevBtn.disabled = currentPosition === 0;
        nextBtn.disabled = currentPosition <= maxPosition;
    }

    // Move slider
    function moveSlider(direction) {
        const cardsVisible = Math.floor(slider.offsetWidth / cardWidth);
        const moveAmount = cardWidth * cardsVisible;
        
        if (direction === 'next' && currentPosition > maxPosition) {
            currentPosition -= moveAmount;
            if (currentPosition < maxPosition) currentPosition = maxPosition;
        } else if (direction === 'prev' && currentPosition < 0) {
            currentPosition += moveAmount;
            if (currentPosition > 0) currentPosition = 0;
        }
        
        sliderContainer.style.transform = `translateX(${currentPosition}px)`;
        updateButtons();
    }

    // Event listeners
    nextBtn.addEventListener('click', () => moveSlider('next'));
    prevBtn.addEventListener('click', () => moveSlider('prev'));

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});

    function handleSwipe() {
        const threshold = 50;
        if (touchStartX - touchEndX > threshold) {
            moveSlider('next');
        } else if (touchEndX - touchStartX > threshold) {
            moveSlider('prev');
        }
    }

    // Initialize buttons
    updateButtons();

    // Responsive adjustments
    window.addEventListener('resize', function() {
        // Reset position on resize
        currentPosition = 0;
        sliderContainer.style.transform = 'translateX(0)';
        updateButtons();
    });
});