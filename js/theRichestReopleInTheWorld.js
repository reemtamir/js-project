'use strict';
let cardsContainer = document.querySelector('.container');
richestPeople.map(
  (item) =>
    (cardsContainer.innerHTML += `<div class="card col" >
      <img id="${item.id}" src="${item.image}" class="card-img-top img" alt="${item.name}'s image" />
      <div class="card-body">
        <h5 class="card-title ">${item.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.worth}</li>
        <li class="list-group-item">A ${item.source}</li>
      </ul>
      </div>`)
);
let images = document.querySelectorAll('.img');
images.forEach((image) => image.addEventListener('click', deleteElement));
console.log(cardsContainer);
function deleteElement(ev) {
  richestPeople = richestPeople.filter((item) => item.id !== ev.target.id);
  console.log(richestPeople);
  renderPage(richestPeople);
}

function createCard(item) {
  let res = `<div class="card col" >
    <img id="${item.id}" src="${item.image}" class="card-img-top img" alt="${item.name}'s image" />
    <div class="card-body">
      <h5 class="card-title ">${item.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${item.worth}</li>
      <li class="list-group-item">A ${item.source}</li>
    </ul>
    </div>`;

  return res;
}
function renderPage(arr) {
  let html = '';
  for (let item of arr) {
    const str = createCard(item);
    html += str;
  }

  cardsContainer.innerHTML = html;

  let images = document.querySelectorAll('.img');
  images.forEach((image) => image.addEventListener('click', deleteElement));
}
