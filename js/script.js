let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('ativo');
        if (i === index) {
            slide.classList.add('ativo');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Troca de slide a cada 5 segundos (5000ms)
setInterval(nextSlide, 5000);
