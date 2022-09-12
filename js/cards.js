'use strict';
let cards = [];
let randomSpade = [];
let randomClub = [];
let randomDiamonds = [];
let randomHart = [];

let spadeImg =
  'https://i.etsystatic.com/9678683/r/il/5c2e76/1351708561/il_fullxfull.1351708561_5dht.jpg';
let clubImg = '';
let diamondsImg = '';
let hartImg = '';
randomSpade = createRandomCards(randomSpade, 'Spade');
randomClub = createRandomCards(randomClub, 'Club');
randomDiamonds = createRandomCards(randomDiamonds, 'Diamonds');
randomHart = createRandomCards(randomHart, 'Hart');
function createRandomCards(arr, img) {
  for (let i = 1; i < 14; i++) {
    switch (i) {
      case 1:
        arr.push(`${img}-A`);
        break;
      case 11:
        arr.push(`${img}-Jack`);
        break;
      case 12:
        arr.push(`${img}-Queen`);
        break;
      case 13:
        arr.push(`${img}-King`);
        break;
      default:
        arr.push(`${img} - ${i}`);
    }
  }
  shuffle(arr);
  return arr;
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  let counter = 0;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
cards.push(...[randomSpade, randomClub, randomDiamonds, randomHart]);
console.table(cards);
document.querySelector('.cards').innerText = spadeImg;
