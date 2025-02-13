// Mobile menu functionality
function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    menu.classList.toggle('active');
}

// Slideshow functionality
function slideShow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('previous');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.remove('previous');
        slides[currentSlide].classList.add('active');
    }, 5000);
}

// Initialize all functions when page loads
window.addEventListener('load', () => {
    slideShow();
}); 