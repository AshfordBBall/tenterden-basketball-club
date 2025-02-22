// Image Slider for Homepage
let currentSlide = 0;
const slides = document.querySelectorAll('.hero img');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000); // Rotate every 5 seconds