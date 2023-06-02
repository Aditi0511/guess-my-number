'use strict';

//document.querySelector('.message').textContent = 'Correct number 🍾🍿';
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20);

document.querySelector('.highscore').textContent = 22;
let score = 23;
let highscore = 0;
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);

    console.log(guess, 'guessName');
    if (!guess) {
        displayMessage('No Number');
    } else if (guess == secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = ' #60b347';
        document.querySelector('.number').style.width = '30rem';
        displayMessage('Correct Number 👍');
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    // } else if (guess < secretNumber) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = 'Too low....';
    //         score--;
    //         console.log(score);
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Lost the game....';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high....';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Lost the game....';
    //         document.querySelector('.score').textContent = 0;
    //     }
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
            score--;
            console.log(score);
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Lost the game....');
            document.querySelector('.score').textContent = 0;
        }
    }
});
document.querySelector('.again').addEventListener('click', function() {
    score = 23;
    document.querySelector('body').style.backgroundColor = ' #222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
});