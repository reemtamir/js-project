'use strict';
let h2 = document.querySelector('.winner');
let runners = [
  //   dog: {
  //     name: 'dog',
  //     id: 'dog',
  //     voice: 'woof',
  //     img: 'dog.gif',
  //     stp: 50,
  //   },
];
function Runner(name, id, voice, img, speed, pos = 0) {
  {
    this.name = name;
    this.id = id;
    this.voice = voice;
    this.img = img;
    this.speed = speed;
    this.pos = pos;
  }
}

let dog = new Runner(
  'dog',
  'dog',
  'woof',
  'https://w7.pngwing.com/pngs/411/116/png-transparent-dog-cartoon-illustration-cute-dog-mammal-painted-animals.png',

  Math.floor(Math.random() * 30) + 25
);
let horse = new Runner(
  'horse',
  'horse',
  'neigh',
  'https://i.pinimg.com/originals/ae/f5/0a/aef50a29f12e06db36021a71a8d7b6cc.gif',

  Math.floor(Math.random() * 30) + 25
);
let duck = new Runner(
  'duck',
  'duck',
  'quack',
  'https://i.pinimg.com/736x/76/22/f3/7622f3dee575dd89f6f6ee446794b1b4.jpg',

  Math.floor(Math.random() * 30) + 25
);
let chick = new Runner(
  'chick',
  'chick',
  'cheap',
  'https://us.123rf.com/450wm/topvectors/topvectors1905/topvectors190500866/123035073-rooster-with-bright-plumage-farm-cock-running-poultry-farming-vector-illustration-on-white-backgroun.jpg?ver=6',

  Math.floor(Math.random() * 30) + 25
);

runners.push(dog, horse, duck, chick);
let imagContainer = document.querySelector('.img-container');
$(window).on('load', createCards(runners));
function createCards(arr) {
  for (let key of arr) {
    let div = document.createElement('div');
    div.innerHTML += `  <div style="width:50px" id="${key.id}" dir="ltr" onclick="chooseRunner(id)"  class="my-5" >
    <img class="img"  src="${key.img}"alt="${key.name}'s img" />
 
  </div>`;
    imagContainer.appendChild(div);
  }
}

const dogAudio = new Audio('sounds/dog.mp3');
const horseAudio = new Audio('sounds/horse.mp3');
const duckAudio = new Audio('sounds/duck.mp3');
const chickAudio = new Audio('sounds/chick.wav');
let h3 = document.querySelector('.h3');

function chooseRunner(id) {
  if (isGameOn) return;
  switch (id) {
    case 'dog':
      dogAudio.play();
      dogAudio.currentTime = 0;
      makeImageBigger(0);
      h3.innerHTML = ` ${id.toUpperCase()}  has chosen`;

      break;

    case 'horse':
      horseAudio.play();
      horseAudio.currentTime = 0;
      makeImageBigger(1);

      h3.innerHTML = ` ${id.toUpperCase()}  has chosen`;
      break;

    case 'duck':
      duckAudio.play();
      duckAudio.currentTime = 0;
      makeImageBigger(2);
      h3.innerHTML = ` ${id.toUpperCase()}  has chosen`;

      break;

    case 'chick':
      chickAudio.play();
      chickAudio.currentTime = 0;
      makeImageBigger(3);
      h3.innerHTML = ` ${id.toUpperCase()}  has chosen`;

      break;
  }
}

function makeImageBigger(i) {
  imagContainer.children[i].children[0].children[0].style.height = 100 + 'px';
  imagContainer.children[i].children[0].children[0].style.width = 100 + 'px';
  setTimeout(() => {
    h3.innerHTML = ``;
    imagContainer.children[i].children[0].children[0].style.height = 80 + 'px';
    imagContainer.children[i].children[0].children[0].style.width = 80 + 'px';
  }, 2000);

  return imagContainer.children[i].children[0].id;
}
let isGameOn = false;
const startBtn = document.querySelector('.start');
startBtn.addEventListener('click', startGame);
let interval;
function startGame() {
  h3.innerHTML = '';
  if (isGameOn) return;
  isGameOn = true;
  let intervalId = setInterval(() => {
    if (isGameOn) {
      for (let key of runners) {
        key.pos += key.speed;

        let div = document.getElementById(`${key.id}`);

        div.style.right = key.pos + 'px';

        if (key.pos >= 1500) {
          clearInterval(intervalId);
          let nameToUpper = '' + key.name;
          h2.innerText = `${nameToUpper.toUpperCase()} WINS 🥇🏃‍♂️`;
          isGameOn = false;
        }
      }
    }
  }, 300);
}
function reset() {
  if (isGameOn) return;
  h2.innerText = '';
  for (let key of runners) {
    let div = document.getElementById(`${key.id}`);
    key.pos = 0;
    div.style.right = key.pos + 'px';
    key.speed = Math.floor(Math.random() * 30) + 25;
  }
}
