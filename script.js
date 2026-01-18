/* --- Carousel Logic --- */
let currentIndex = 0;

function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    // Since we show 2 images at a time, the maximum we can slide 
    // is to the index of the second-to-last image.
    const maxIndex = totalSlides - 2;

    currentIndex += direction;

    // Prevents sliding past the first or last images
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    // Move the track by 50% for every index (because each slide is 50% wide)
    const amountToMove = currentIndex * -50;
    track.style.transform = `translateX(${amountToMove}%)`;
}

let currentI = 0;

function moveSlide2(direction) {
    const track = document.querySelector('.carousel-track2');
    const slides = document.querySelectorAll('.slide2');
    const totalSlides = slides.length;
    
    // Since we show 2 images at a time, the maximum we can slide 
    // is to the index of the second-to-last image.
    const maxIndex = totalSlides - 2;

    currentI += direction;

    // Prevents sliding past the first or last images
    if (currentI < 0) {
        currentI = 0;
    } else if (currentI > maxIndex) {
        currentI = maxIndex;
    }

    // Move the track by 50% for every index (because each slide is 50% wide)
    const amountToMove = currentI * -50;
    track.style.transform = `translateX(${amountToMove}%)`;
}

/* --- Back to Top Button Logic --- */
let mybutton = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}