const button = document.querySelector('.show-toast');
const toastDiv = document.querySelector('.toast-container');
const topBottom = document.querySelector('#top-bottom');
const leftRight = document.querySelector('#left-right');
const toastContainer = document.querySelector('.toast-container');
const type = document.querySelector('#type');
const textInput = document.querySelector('.text-input');
const duration = document.querySelector('.duration');

button.addEventListener('click', () => {
  var div = document.createElement('div');
  div.style.width = '15rem';
  div.style.height = '2rem';
  switch (type.value) {
    case 'success':
      div.style.background = 'green';
      break;
    case 'error':
      div.style.background = 'red';
      break;
    case 'warning':
      div.style.background = 'orange';
      break;
    case 'info':
      div.style.background = 'yellow';
      break;
  }

  div.style.marginTop = '5px';
  div.style.color = 'black';
  if (topBottom.value === 'bottom') toastContainer.classList.add('bottom');
  if (leftRight.value === 'right') toastContainer.classList.add('right');
  div.innerText = textInput.value;
  setTimeout(() => {
    const divs = toastDiv.querySelectorAll('div');
    if (divs.length > 0) {
      const lastDiv = divs[divs.length - 1];
      lastDiv.remove();
      topPosition = 0;
    }
  }, `${duration.value}` * 1000);
  console.log(`${duration.value}` * 1000);
  toastDiv.appendChild(div);
});
