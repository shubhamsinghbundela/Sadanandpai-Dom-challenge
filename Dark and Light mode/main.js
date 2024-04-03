const checkbox1 = document.querySelector('#checkbox1');
const checkbox2 = document.querySelector('#checkbox2');
const body = document.querySelector('body');
const container = document.querySelector('.container');
checkbox1.addEventListener('change', function (event) {
  if (event.target.checked) {
    checkbox2.checked = true;
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    container.style.backgroundColor = 'black';
    container.style.color = 'white';
  } else {
    checkbox2.checked = false;
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    container.style.backgroundColor = 'white';
    container.style.color = 'black';
  }
});

checkbox2.addEventListener('change', function (event) {
  if (event.target.checked) {
    container.style.backgroundColor = 'black';
    container.style.color = 'white';
  } else {
    container.style.backgroundColor = 'white';
    container.style.color = 'black';
  }
});
