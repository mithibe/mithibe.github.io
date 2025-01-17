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
// let currentIndex = 0; // Start at the first slide
// const track = document.querySelector(".projects-track");
// const slides = document.querySelectorAll(".projects");
// const totalSlides = slides.length;

// function slide(direction) {
//     // Update the index
//     currentIndex += direction;

//     // Handle edge cases: loop back to start or end
//     if (currentIndex < 0) {
//         currentIndex = totalSlides - 1; // Go to last slide
//     } else if (currentIndex >= totalSlides) {
//         currentIndex = 0; // Go to first slide
//     }

//     // Move the track
//     const offset = -currentIndex * 100; // Calculate percentage offset
//     track.style.transform = `translateX(${offset}%)`;
// }

// Initialize by ensuring the first slide is visible
// slide(0)


// changing text
// Array of text options
// const roles = ["UI/UX Designer", "Web Developer", "Software Engineer"];
// const textElement = document.querySelector(".changing-text");

// let index = 0; // current role index
// const morphSpeed = 50; // Speed of each letter morph in milliseconds
// const displayInterval = 3000; // Time to display each full text before morphing

// // Function to morph the text like the Matric effect
// function morphText(targetText) {
//     const currentText = textElement.textContent;
//     const maxLength = Math.max(currentText.length, targetText.length);
//     let morphIndex = 0;

//     const interval = serInterval(() => {
//         let newText = "";

//         for (let i = 0; i < maxLength; i++) {
//             if (i < morphIndex) {
//                 // Show the actual letter when morphIndex passes
//                 newText += targetText[i] || "";
//             } else {
//                 // Random characters before settling on the final letter
//                 newText += String.fromCharCode(33 + Math.random() * 94);
//             }
//         }

//         textElement.textContent = newText;

//         if (morphIndex >= targetText.length) {
//             clearInterval(interval); // Stop morphing when done
//         }

//         morphIndex++;
//     }, morphSpeed);
// }

// // Main loop to cycle through roles
// setInterval(() => {
//     index = (index + 1) % roles.length; // Cycle through roles
//     morphText(roles[index]);
// }, displayInterval);

// // Copied
// // Array of text options
// const roles = ["UI/UX Designer", "Web Developer", "Software Engineer"];
// const textElement = document.getElementById("changing-text"); // Use `getElementById`

// let index = 0; // Current role index
// const morphSpeed = 50; // Speed of each letter morph in milliseconds
// const displayInterval = 3000; // Time to display each full text before morphing

// // Function to morph the text like the Matrix effect
// function morphText(targetText) {
//   const currentText = textElement.textContent;
//   const maxLength = Math.max(currentText.length, targetText.length);
//   let morphIndex = 0;

//   const interval = setInterval(() => {
//     let newText = "";

//     for (let i = 0; i < maxLength; i++) {
//       if (i < morphIndex) {
//         // Show the actual letter when morphIndex passes
//         newText += targetText[i] || "";
//       } else {
//         // Random characters before settling on the final letter
//         newText += String.fromCharCode(33 + Math.random() * 94);
//       }
//     }

//     textElement.textContent = newText;

//     if (morphIndex >= targetText.length) {
//       clearInterval(interval); // Stop morphing when done
//     }

//     morphIndex++;
//   }, morphSpeed);
// }

// // Main loop to cycle through roles
// setInterval(() => {
//   index = (index + 1) % roles.length; // Cycle through roles
//   morphText(roles[index]);
// }, displayInterval);


// Copied
// Array of text options
const roles = ["UI/UX Designer", "Web Developer", "Software Engineer"];
const textElement = document.getElementById("changing-text"); // Use `getElementById`

let index = 0; // Current role index
const morphSpeed = 50; // Speed of each letter morph in milliseconds
const displayInterval = 3000; // Time to display each full text before morphing
const morphDuration = 500; // Time to morph between words (in milliseconds)

// Function to morph the text like the Matrix effect
function morphText(targetText) {
  const currentText = textElement.textContent;
  const maxLength = Math.max(currentText.length, targetText.length);
  let morphIndex = 0;
  let randomInterval;

  // Generate random characters for a short duration before settling on target text
  const interval = setInterval(() => {
    let newText = "";

    for (let i = 0; i < maxLength; i++) {
      if (i < morphIndex) {
        // Show the actual letter when morphIndex passes
        newText += targetText[i] || "";
      } else {
        // Random characters before settling on the final letter
        newText += String.fromCharCode(33 + Math.random() * 94); // Random characters
      }
    }

    textElement.textContent = newText;

    if (morphIndex >= targetText.length) {
      clearInterval(interval); // Stop morphing when done
    }

    morphIndex++;
  }, morphSpeed);

  // Stop showing random characters after a set duration
  setTimeout(() => {
    clearInterval(interval);
    textElement.textContent = targetText; // Set the final target text
  }, morphDuration);
}

// Main loop to cycle through roles
setInterval(() => {
  index = (index + 1) % roles.length; // Cycle through roles
  morphText(roles[index]);
}, displayInterval);
