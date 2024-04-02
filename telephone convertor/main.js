const input = document.querySelector('input');
let count = 0;
input.addEventListener('input', (event) => {
  if (event.target.value.length == 4) {
    input.value = `+(${event.target.value.substring(
      0,
      3
    )})-${event.target.value.substring(count - 1)}`;
  }
});
