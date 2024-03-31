const rndInt = randomIntFromInterval(0, 100);
const submitButton = document.querySelector('.submit-button');
const startGame = document.querySelector('.start-game');
const input = document.querySelector('input');
const showInput = document.querySelector('.show-input');
const showStatus = document.querySelector('.show-status');
let count = 0;

startGame.addEventListener('click', function (event) {
  event.preventDefault();
  input.disabled = false;
  submitButton.disabled = false;
  showStatus.innerText = '';
  showInput.innerText = '';
  count = 0;
  startGame.disabled = true;
});

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  if (input.checkValidity()) {
    checkGuessNumber();
  } else {
    input.reportValidity();
  }
});

function checkGuessNumber() {
  if (count == 10) {
    showStatus.innerText = `You lost! The number was ${rndInt}`;
    submitButton.disabled = true;
    input.disabled = true;
    startGame.disabled = false;
    return;
  }
  if (input.value >= input.min && +input.value <= +input.max) {
    if (rndInt > input.value) {
      showStatus.innerText = 'too low';
    } else if (rndInt < input.value) {
      showStatus.innerText = 'too high';
    } else {
      showStatus.innerText = 'You got it! Congrats';
    }
    if (Boolean(showInput.textContent)) {
      showInput.innerText += `, ${input.value}`;
    } else {
      showInput.innerText = `your guesses: ${input.value}`;
    }
  }
  input.value = '';
  count++;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
