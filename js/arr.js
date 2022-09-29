'use strict';
let arrays = [];
let addNumbers = [];
let largestNumber = -Infinity;
$('#numbers')[0];
$('#push-numbers').on('click', pushNumbers);

function pushNumbers() {
  if ($('#numbers')[0].value === '') return;
  addNumbers.push(Number($('#numbers')[0].value));
  $('.p').text(` [${addNumbers}]`);
  clearInputs();
}

$('#create-array').on('click', createArray);

function createArray() {
  if (addNumbers.length === 0) return;
  addNumbers = sort(addNumbers);
  arrays.push(addNumbers);
  addNumbers = [];
  renderP();
}

$('#create-random-array').on('click', createRandomArray);

function createRandomArray() {
  if (Number($('#numbers')[0].value) === 0) return;
  let randomArr = new Array(Number($('#numbers')[0].value));
  randomArr = randomArr.fill(0).map((x) => Math.floor(Math.random() * 100));

  arrays.push(sort(randomArr));
  renderP();
  clearInputs();
}

function clearInputs() {
  $('#numbers')[0].value = '';
}

function renderP() {
  $('.p').text(``);
  document.querySelector('.sorted-arrays').innerHTML = '';
  for (let key of arrays) {
    document.querySelector('.sorted-arrays').innerHTML += `[${key}]<br/>`;
  }
}
function sort(arr) {
  for (let i = 1; i < arr.length; i++)
    for (let j = 0; j < i; j++)
      if (arr[i] < arr[j]) {
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
  return arr;
}
