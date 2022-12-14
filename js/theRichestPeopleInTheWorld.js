'use strict';
let cardsContainer = document.querySelector('.container');
richestPeople.map(
  (item) =>
    (cardsContainer.innerHTML += `<div class="card col  " >
      <img  id="${item.id}" src="${item.image}" class="card-img-top img m-auto" alt="${item.name}'s image" />
      <div class="card-body">
        <h5 class="card-title ">${item.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.worth}</li>
        <li class="list-group-item">A ${item.source}</li>
      </ul>
      </div>`)
);
addFnToElement();
function deleteElement(ev) {
  richestPeople = richestPeople.filter((item) => item.id !== ev.target.id);
  renderPage(richestPeople);
}

function createCard(person) {
  let res = `<div class="card col" >
    <img id="${person.id}" src="${person.image}" class="card-img-top img" alt="${item.name}'s image" />
    <div class="card-body">
      <h6 class="card-title  ">${person.name}</h6>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${person.worth}</li>
      <li class="list-group-item">A ${person.source}</li>
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
  addFnToElement();
}
function addFnToElement() {
  let images = document.querySelectorAll('.img');
  images.forEach((image) => image.addEventListener('click', deleteElement));
}
