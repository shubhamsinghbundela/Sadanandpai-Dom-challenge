const number = document.querySelector('.show-number');
const input = document.querySelector('input');
let total = 0;
let element = 0;
document.querySelector('.plus-button').addEventListener('click', increment);
document.querySelector('.minus-button').addEventListener('click', decrement);
// input.addEventListener('input', updateTotalValue);
document.querySelector('.reset-button').addEventListener('click', reset);

function increment() {
  if (Boolean(input.value)) {
    total += Number(input.value);
  } else {
    total += 1;
  }
  number.innerText = total;
}

function decrement() {
  if (Boolean(input.value)) {
    total -= Number(input.value);
  } else {
    total -= 1;
  }
  number.innerText = total;
}

function reset() {
  total = 0;
  number.innerText = 0;
}
