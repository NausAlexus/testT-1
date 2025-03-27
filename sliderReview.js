let index = 0;

function showReview() {
    const slider = document.getElementById('slider');
    const totalReviews = document.querySelectorAll('.review').length;

    slider.style.transform = `translateX(${-index * 100}%)`;
}

function nextReview() {
    const totalReviews = document.querySelectorAll('.review').length;
    index = (index + 1) % totalReviews;
    showReview();
}

function prevReview() {
    const totalReviews = document.querySelectorAll('.review').length;
    index = (index - 1 + totalReviews) % totalReviews;
    showReview();
}

// Add event listeners to the buttons
document.addEventListener('DOMContentLoaded', () => {
    showReview(); // Show the initial review

    document.getElementById('prevReviewBtn').addEventListener('click', prevReview);
    document.getElementById('nextReviewBtn').addEventListener('click', nextReview);
});