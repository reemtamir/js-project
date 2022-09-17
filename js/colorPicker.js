'use-strict';

let myFavoriteColors = [];
let arrOfNames = [];
const localStorageData = JSON.parse(localStorage.getItem('color'));
let color;
let isColored = false;
let inputR = document.querySelector('.input-r');
let inputG = document.querySelector('.input-g');
let inputB = document.querySelector('.input-b');
$('.test').hover(handlerIn, handlerOut);
const btn = document
  .querySelector('.add-btn')
  .addEventListener('click', createColor);
const favoriteBtn = document
  .querySelector('.favorite-btn')
  .addEventListener('click', addToFavorite);
$(window).on('load', showFavorite);
let p = document.querySelector('.favorite');

function showFavorite() {
  if (!localStorageData) return;
  myFavoriteColors = localStorageData;
  let n_match = [];
  for (let key of myFavoriteColors) {
    n_match.push(...key.split(' '));
  }

  let name = '';
  p.innerHTML = ' <span class="fs-3">My favorite colors are:</span>  <br/>';
  for (let key in n_match) {
    name = ntc.name(n_match[key]);
    arrOfNames.push(name[1]);

    p.innerHTML += `<span style="color:${name[0]}">${name[1]}</span> <span style="color:${name[0]}">${name[0]}</span> <br/> `;
  }
}

function createColor() {
  if (
    Number(inputR.value) < 0 ||
    Number(inputR.value) > 255 ||
    Number(inputG.value) < 0 ||
    Number(inputG.value) > 255 ||
    Number(inputB.value) < 0 ||
    Number(inputB.value) > 255
  )
    return;

  color = `rgb(${inputR.value},${inputG.value},${inputB.value})`;
  if (!isColored) {
    $('.color').css('background-color', color);
    $('.color').css('color', 'white');
    $('.color').text(
      `The chosen color is ${color} and the chosen color in HEXADEC is ${rgb2hex(
        color
      )}`
    );

    isColored = true;
  } else {
    $('.color-2').css('background-color', color);
    $('.color-2').css('color', 'white');
    $('.color-2').text(
      `The chosen color is ${color}  and the chosen color in  HEXADEC is ${rgb2hex(
        color
      )}`
    );
    isColored = false;
  }

  clearInputs();
}

function addToFavorite() {
  myFavoriteColors.push(rgb2hex(color));
  localStorage.setItem('color', JSON.stringify(myFavoriteColors));
  showFavorite();
}
function clearInputs() {
  inputR.value = '';
  inputG.value = '';
  inputB.value = '';
}
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
    return ('0' + parseInt(x).toString(16)).slice(-2);
  }
  return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
function handlerIn() {
  if (myFavoriteColors.length === 0) return;
  let randomHexNumber =
    myFavoriteColors[Math.floor(Math.random() * myFavoriteColors.length)];
  $('.test').css('background-color', randomHexNumber);
  $('.test').text(` Favorite colors`);
}

function handlerOut() {
  if (myFavoriteColors.length === 0) {
    $('.test').text(`No favorite colors yet 🌈`);
    return;
  }
  let randomHexNumber =
    myFavoriteColors[Math.floor(Math.random() * myFavoriteColors.length)];
  $('.test').css('background-color', randomHexNumber);
  $('.test').text(` Favorite colors`);
}

$('.clear-storage').click(function () {
  myFavoriteColors.length = 0;
  p.innerHTML = '';
  $('.test').css('background-color', 'white');
  $('.test').text(`Hover me`);
  localStorage.clear();
});
