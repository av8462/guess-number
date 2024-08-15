'use strict';

// document.querySelector('.message').textContent = 'Correct number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 10;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const numberElement = document.querySelector('.number');
const guessElement = document.querySelector('.guess');
const messageElement = document.querySelector('.message');
const bodyElement = document.querySelector('body');
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');

const displayMessage = message => {
  messageElement.textContent = message;
};

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(guessElement.value);

  if (!guess) {
    displayMessage('No number!');

    return;
  }

  if (guess === secretNumber) {
    displayMessage('Correct number!');

    bodyElement.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';
    numberElement.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }

    return;
  }

  if (guess !== secretNumber) {
    const message = guess > secretNumber ? 'Too high!' : 'Too low!';

    displayMessage(message);
  }

  // if (guess > secretNumber) {
  //   displayMessage('Too high!');

  //   if (score > 1) {
  //     score--;
  //     scoreElement.textContent = score;
  //   } else {
  //     displayMessage('You lost the game. Try again!');
  //     scoreElement.textContent = 0;
  //   }

  //   return;
  // }

  // if (guess < secretNumber) {
  //   displayMessage('Too low!');
  //   if (score > 1) {
  //     score--;
  //     scoreElement.textContent = score;
  //   } else {
  //     displayMessage('You lost the game. Try again!');
  //     scoreElement.textContent = 0;
  //   }

  //   return;
  // }
});
