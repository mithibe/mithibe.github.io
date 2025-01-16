// carousel function

// let currentIndex = 0;

// function slide(direction) {
//     const track = document.querySelector(".projects-track");
//     const slides = document.querySelectorAll(".projects");
//     const totalSlides = slides.length;

//     currentIndex += direction;

//     // Loop back to the beginning or end
//     if (currentIndex < 0) {
//         currentIndex = totalSlides - 1;
//     } else if (currentIndex >= totalSlides) {
//         currentIndex = 0;
//     }

//     const offset = -currentIndex * 100; // adjust 300px to the slide width
//     track.style.transform = `translateX(${offset}%)`;
// }

// const pages = document.querySelectorAll('.projects');
// const totalPages = pages.length;
// let currentPage = 0;

// function slide(index){
//     currentPage += direction;
//     // Loop back to the beginning or end
//     if (currentPage < 0) {
//         currentPage = totalPages - 1;
//     } else if (currentPage >= totalPages) {
//         currentPage = 0;
//     }

//     const offset = -index * 100; // Calculate offset for translateX
//     pages.forEach((page) => {
//         page.style.transform = `translateX(${offset}%)`;
//     });
// }

// showPage(currentPage);

//3rd attempt
let currentIndex = 0; // Start at the first slide
const track = document.querySelector(".projects-track");
const slides = document.querySelectorAll(".projects");
const totalSlides = slides.length;

function slide(direction) {
    // Update the index
    currentIndex += direction;

    // Handle edge cases: loop back to start or end
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Go to last slide
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Go to first slide
    }

    // Move the track
    const offset = -currentIndex * 100; // Calculate percentage offset
    track.style.transform = `translateX(${offset}%)`;
}

// Initialize by ensuring the first slide is visible
slide(0)