const rndInt = randomIntFromInterval(0, 100);
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  if (input.checkValidity()) {
    checkGuessNumber();
  } else {
    input.reportValidity();
  }
});

const input = document.querySelector('input');
const showInput = document.querySelector('.show-input');
const showStatus = document.querySelector('.show-status');

function checkGuessNumber() {
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
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
