# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

# Project 1 - Color Changer

```Javascript
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  // *** Adding event listener to each button **
  button.addEventListener(
    'click', // the event to listen, eg: mouseover, click etc.
    (e) => {
      const colorToSet = e.target.id; // using e.target we select attributes
      // console.log(colorToSet);
      body.style.backgroundColor = colorToSet;
    }
  );
});
```

# Project 2 - BMI Calculator

```js
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent submission to server, since we have no back-end at the moment
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height: ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight: ${weight}`;
  } else {
    const BMI = (weight / (height * 0.01) ** 2).toFixed(2);
    let finalRes = '';
    if (BMI < 18.6) {
      finalRes = 'Under Weight';
    } else if (BMI >= 18.6 && BMI < 24.9) {
      finalRes = 'Normal Range';
    } else {
      finalRes = 'Overweight';
    }
    result.innerHTML = `Your BMI is ${BMI} and you are ${finalRes}`;
  }
});
```

# Project 3 - Digital Clock

```js
const clock = document.querySelector('#clock');
// we need to run date at intervals of each sec
setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // time in micro-seconds
```

# Project 4 - Guess the number

```js
let previousGuesses = [];
const GUESSES = 10;
const form = document.querySelector('#form');
const button = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p'); // to create the end-game button

let result = Math.round(Math.random() * 100 + 1);
console.log(result);
let guessesRemaining = GUESSES;
let playGame = true;

function validateGuess(guess) {
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    alert('Submit a valid guess');
  } else {
    previousGuesses.push(guess);
    displayGuess(guess);
    if (guessesRemaining <= 0) {
      displayMessage(`Game Over. The Random number was ${result}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === result) {
    // print winning messsage
    displayMessage(`You have won!! Your guess of ${guess} was correct`);
    endGame();
  } else if (guess > result) {
    displayMessage(`Your guess is higher than the number`);
  } else {
    displayMessage(`You guess is lower than the number`);
  }
}
// DOM Interaction
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// Display Previous Guess and Remaining Guesses
function displayGuess(guess) {
  userInput.value = '';
  guessesRemaining--;
  guessSlot.innerHTML = `${previousGuesses}`;
  remaining.innerHTML = `${guessesRemaining}`;
}

// Init a new game after endGame()
function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', (e) => {
    result = Math.round(Math.random() * 100 + 1);
    previousGuesses = [];
    guessesRemaining = GUESSES;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${guessesRemaining}`;
    userInput.removeAttribute('disabled');
    button.removeAttribute('disabled');
    lowOrHi.innerHTML = '';
    startOver.removeChild(p); // remove result
    playGame = true;
  });
}

// Clear input fields
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', true);
  button.setAttribute('disabled', true);
  p.classList.add('button');
  p.innerHTML = `<h2 type='button' id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

if (playGame) {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
    console.log();
  });
}
```