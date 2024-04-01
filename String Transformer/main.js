const input = document.querySelector('input');
const lowerCase = document.querySelector('.lower-case');
const upperCase = document.querySelector('.upper-case');
const camelCase = document.querySelector('.camel-case');
const pascalCase = document.querySelector('.pascal-case');
const snakeCase = document.querySelector('.snake-case');
const kebabCase = document.querySelector('.kebab-case');
const trim = document.querySelector('.trim');
input.addEventListener('input', (event) => {
  lowerCase.innerText = event.target.value.toLowerCase();
  upperCase.innerText = event.target.value.toUpperCase();
  camelCase.innerText = camelcase(event.target.value.trim());
  pascalCase.innerText = pascalcase(event.target.value.trim());
  snakeCase.innerText = snakecase(event.target.value.trim());
  kebabCase.innerText = kebabcase(event.target.value.trim());
  trim.innerText = event.target.value.trim();
});

function camelcase(str) {
  let str1 = str.toLowerCase();
  let str2 = str1.split(' ');
  let str3 = [str2[0]];
  for (let i = 1; i < str2.length; i++) {
    str3[i] = str2[i][0].toUpperCase() + str2[i].slice(1);
  }
  return str3.join('');
}

function pascalcase(str) {
  let str1 = str.toLowerCase();
  let str2 = str1.split(' ');
  let str3 = [];
  for (let i = 0; i < str2.length; i++) {
    str3[i] = str2[i][0].toUpperCase() + str2[i].slice(1);
  }
  return str3.join('');
}

function snakecase(str) {
  let str1 = str.toLowerCase();
  let str2 = str1.split(' ');
  return str2.join('_');
}

function kebabcase(str) {
  let str1 = str.toLowerCase();
  let str2 = str1.split(' ');
  return str2.join('-');
}
