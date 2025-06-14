"use strict";

// Выбор элементов
const row = document.querySelector(".cards");

const pets = [
  {
    id: 1,
    name: "Bars",
    type: "cat",
    age: 2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur aut odio ab praesentium esse explicabo, officia autem facilis quidem est dolores nesciunt perspiciatis aperiam quasi laudantium? Dignissimos nam voluptatem ex!",
  },
  {
    id: 2,
    name: "Tom",
    type: "cat",
    age: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur aut odio ab praesentium esse explicabo, officia autem facilis quidem est dolores nesciunt perspiciatis aperiam quasi laudantium? Dignissimos nam voluptatem ex!",
  },
  {
    id: 3,
    name: "Lessy",
    type: "dog",
    age: 1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur aut odio ab praesentium esse explicabo, officia autem facilis quidem est dolores nesciunt perspiciatis aperiam quasi laudantium? Dignissimos nam voluptatem ex!",
  },
  {
    id: 4,
    name: "Burt",
    type: "cat",
    age: 3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur aut odio ab praesentium esse explicabo, officia autem facilis quidem est dolores nesciunt perspiciatis aperiam quasi laudantium? Dignissimos nam voluptatem ex!",
  },
  {
    id: 5,
    name: "Sunny",
    type: "dog",
    age: 4,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur aut odio ab praesentium esse explicabo, officia autem facilis quidem est dolores nesciunt perspiciatis aperiam quasi laudantium? Dignissimos nam voluptatem ex!",
  },
  {
    id: 6,
    name: "Jessy",
    type: "cat",
    age: 2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur aut odio ab praesentium esse explicabo, officia autem facilis quidem est dolores nesciunt perspiciatis aperiam quasi laudantium? Dignissimos nam voluptatem ex!",
  },
  {
    id: 7,
    name: "Sky",
    type: "cat",
    age: 12,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur aut odio ab praesentium esse explicabo, officia autem facilis quidem est dolores nesciunt perspiciatis aperiam quasi laudantium? Dignissimos nam voluptatem ex!",
  },
];

pets.forEach((pet) => {
  Object.defineProperty(pet, "img", {
    get: function () {
      return this.type === "cat" ? "cat.png" : "dog.png";
    },
  });
});

showPets(pets, row);

function showPets(pets, rows) {
  let html = "";

  pets.forEach((pet) => {
    html += `
    <div class="col-4">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-4 p-2 bg-secondary-subtle d-flex justify-content-center align-items-center">
              <img src="" class="card-img img-fluid rounded-start" alt="${pet.type}">
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title">${pet.name}</h5>
                <p class="card-text">${pet.type}</p>
                <p class="text-secondary card-text">${pet.desc}</p>
                <p class="card-text"><small class="text-body-secondary">Age: ${pet.age} years</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  });
  rows.innerHTML = html;
}
