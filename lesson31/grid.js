"use strict";
// Выбор элементов
const table = document.querySelector(".table");
const tBody = table.tBodies[0];
const tHead = table.tHead;

// Массив данных
const cars = [
  {
    name: "Toyota",
    price: 9700,
    valueOf() {
      return this.price;
    },
    toString() {
      return this.name;
    },
  },
  {
    name: "BMW",
    price: 8000,
    valueOf() {
      return this.price;
    },
    toString() {
      return this.name;
    },
  },
  {
    name: "Meredes",
    price: 9400,
    valueOf() {
      return this.price;
    },
    toString() {
      return this.name;
    },
  },
  {
    name: "Skoda",
    price: 6200,
    valueOf() {
      return this.price;
    },
    toString() {
      return this.name;
    },
  },
];

// Функция добавления авто в таблицу
function showCars(cars) {
  tBody.innerHTML = "";
  cars.forEach((car) => tBody.append(addRow(car)));
}

function addRow(car) {
  const tr = document.createElement("tr");
  for (let i = 0; i < 3; i++) {
    const td = document.createElement("td");
    td.innerText = i == 0 ? tBody.rows.length + 1 : i == 1 ? car : +car;
    tr.append(td);
  }
  return tr;
}
showCars(cars);
