let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide2(direction) {
    const slides = document.querySelector('#slides2');
    const totalSlides = slides.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide3(direction) {
    const slides = document.querySelector('#slides3');
    const totalSlides = slides.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}