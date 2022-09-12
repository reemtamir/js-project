'use strict';

let runners = [
  //   dog: {
  //     name: 'dog',
  //     id: 'dog',
  //     voice: 'woof',
  //     img: 'dog.gif',
  //     stp: 50,
  //   },
];
function Runner(name, id, voice, img, step) {
  {
    this.name = name;
    this.id = id;
    this.voice = voice;
    this.img = img;
    this.step = step;
  }
  // makeSound;
}

let dog = new Runner(
  'dog',
  'dog',
  'woof',
  'https://w7.pngwing.com/pngs/411/116/png-transparent-dog-cartoon-illustration-cute-dog-mammal-painted-animals.png',
  50
);
let horse = new Runner(
  'horse',
  'horse',
  'neigh',
  'https://i.pinimg.com/originals/ae/f5/0a/aef50a29f12e06db36021a71a8d7b6cc.gif',
  70
);
let duck = new Runner(
  'duck',
  'duck',
  'quack',
  'https://i.pinimg.com/736x/76/22/f3/7622f3dee575dd89f6f6ee446794b1b4.jpg',
  40
);
let chick = new Runner(
  'chick',
  'chick',
  'cheap',
  'https://us.123rf.com/450wm/topvectors/topvectors1905/topvectors190500866/123035073-rooster-with-bright-plumage-farm-cock-running-poultry-farming-vector-illustration-on-white-backgroun.jpg?ver=6',
  30
);

runners.push(dog, horse, duck, chick);

let card = document.querySelector('.cards-container');

function createCards(arr) {
  for (let key of runners) {
    card.innerHTML += `  <div dir="ltr" class="card col " style="width: 120px">
    <img  src="${key.img}" class="card-img-top" alt="${key.name}'s img" />
<div class="card-body">
  <h5 class="card-title">Runner's Name:   <span class="text-danger "> <span class="border-bottom"> ${key.name}</span></span></h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Runner's ID: <span class="border-bottom"> ${key.id}</span></li>
  <button id="${key.id}" onclick="makeSound(id)"; class="btn"><li class="list-group-item">Runner's Voice:<span class="border-bottom"> ${key.voice}</span></li></button> 
  <li class="list-group-item">Runner's Steps: <span class="border-bottom"> ${key.step}</span></li>
</ul>
  </div>`;
  }
}

const dogAudio = new Audio('sounds/dog.mp3');
const horseAudio = new Audio('sounds/horse.mp3');
const duckAudio = new Audio('sounds/duck.mp3');
const chickAudio = new Audio('sounds/chick.wav');
createCards(runners);
console.log(card);

function makeSound(id) {
  switch (id) {
    case 'dog':
      console.log(id);
      dogAudio.play();
      dogAudio.currentTime = 0;
      break;

    case 'horse':
      console.log(id);
      horseAudio.play();
      horseAudio.currentTime = 0;
      break;
    case 'duck':
      console.log(id);
      duckAudio.play();
      duckAudio.currentTime = 0;
      break;
    case 'chick':
      console.log(id);
      chickAudio.play();
      chickAudio.currentTime = 0;
      break;
  }
}
const startBtn = document.querySelector('.start');
startBtn.addEventListener('click', startGame);
let steps = 0;
function startGame() {
  steps += 10;
  card.style.right = steps + 'px';
}
