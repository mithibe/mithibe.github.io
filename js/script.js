// carousel function

let currentIndex = 0;

function slide(direction) {
    const track = document.querySelector(".projects-track");
    const slides = document.querySelectorAll(".projects");
    const totalSlides = slides.length;

    currentIndex += direction;

    // Loop back to the beginning or end
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 300; // adjust 300px to the slide width
    track.style.transform = `translateX(${offset}px)`;
}