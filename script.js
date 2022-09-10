'use-strict';
let isColored = false;
let inputR = document.querySelector('.input-r');
let inputG = document.querySelector('.input-g');
let inputB = document.querySelector('.input-b');
function createColor() {
  let color = `rgb(${inputR.value},${inputG.value},${inputB.value})`;

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
  return color;
}

function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
    return ('0' + parseInt(x).toString(16)).slice(-2);
  }
  return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
const btn = document
  .querySelector('.btn')
  .addEventListener('click', createColor);

function clearInputs() {
  inputR.value = '';
  inputG.value = '';
  inputB.value = '';
}
