// // Defining text characters for the empty and full hearts for you to use later.
// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'

// // Your JavaScript code goes here!




// //------------------------------------------------------------------------------
// // Don't change the code below: this function mocks the server response
// //------------------------------------------------------------------------------

// function mimicServerCall(url="http://mimicServer.example.com", config={}) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       let isRandomFailure = Math.random() < .2
//       if (isRandomFailure) {
//         reject("Random server error. Try again.");
//       } else {
//         resolve("Pretend remote server notified of action!");
//       }
//     }, 300);
//   });
// }
// Defining text characters for the empty and full hearts for later use
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

document.addEventListener('DOMContentLoaded', () => {
  // Selecting elements from the DOM
  const errorModal = document.getElementById('modal');
  const errorMessage = document.getElementById('modal-message');
  const hearts = document.querySelectorAll('.like-glyph');

  // Adding .hidden class to error modal on page load
  errorModal.classList.add('hidden');

  // Function to toggle heart icon
  function toggleHeart(heart) {
    if (heart.textContent === EMPTY_HEART) {
      heart.textContent = FULL_HEART;
      heart.classList.add('activated-heart');
    } else {
      heart.textContent = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
  }

  // Event listener for clicking heart icons
  hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          toggleHeart(heart);
        })
        .catch((error) => {
          errorMessage.textContent = error;
          errorModal.classList.remove('hidden');
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    });
  });

});

// Function to mimic server call
function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject('Random server error. Try again.');
      } else {
        resolve('Pretend remote server notified of action!');
      }
    }, 300);
  });
}