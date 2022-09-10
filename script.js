'use-strict';
let myFavoritColors = [];
const localStorageData = JSON.parse(localStorage.getItem('color'));
let color;
let isColored = false;
let inputR = document.querySelector('.input-r');
let inputG = document.querySelector('.input-g');
let inputB = document.querySelector('.input-b');
const btn = document
  .querySelector('.btn')
  .addEventListener('click', createColor);
const favoriteBtn = document
  .querySelector('.favorite-btn')
  .addEventListener('click', addToFavorite);
$(window).on('load', showFavorite);
function showFavorite() {
  if (!localStorageData) return;
  myFavoritColors = localStorageData;
  $('.favorite').text(
    ` My favorite colors are: ${JSON.stringify(myFavoritColors)}
    `
  );
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
      `The chosen color is ${color} and the chosen color in ${'hexadic'.toLocaleUpperCase()} is ${rgb2hex(
        color
      )}`
    );

    isColored = true;
  } else {
    $('.color-2').css('background-color', color);
    $('.color-2').css('color', 'white');
    $('.color-2').text(
      `The chosen color is ${color}  and the chosen color in  ${'hexadic'.toLocaleUpperCase()} is ${rgb2hex(
        color
      )}`
    );
    isColored = false;
  }

  clearInputs();
}

function addToFavorite() {
  myFavoritColors.push(color);
  localStorage.setItem('color', JSON.stringify(myFavoritColors));
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

function getColorName(arr) {
  for (key of arr) {
    console.log(key);
  }
}
getColorName(localStorageData);
