"use strict";
// Выбор элементов
const carForm = document.forms["car-form"];
const carInput = carForm.querySelectorAll(".form-control");
const addCarBtn = carForm.querySelector(".btn-success");
const listCars = document.querySelector(".list-group");

carForm.noValidate = true;
// Создание массива
const arrayCars = [];

// Функция создания объекта
function Car(name, year, color) {
  this.name = name;
  this.year = year;
  this.color = color;
}

// Функция подтверждения формы
carForm.addEventListener("submit", carFormHandler);

function carFormHandler(event) {
  const carName = carForm.name.value;
  const carYear = carForm.year.value;
  const carColor = carForm.color.value;
  event.preventDefault();
  if (!this.checkValidity()) {
    event.stopImmediatePropagation();
    this.classList.add("was-validated");
  } else {
    addCarBtnHandler(carName, carYear, carColor);
    this.reset();
    this.classList.remove("was-validated");
  }
}

function addCarBtnHandler(name, year, color) {
  const newCar = new Car(name, year, color);
  arrayCars.push(newCar);
  createRow(newCar);
  console.log(arrayCars);
}

function createRow(car) {
  const infoCar = document.createElement("li");
  infoCar.className = "list-group-item";
  infoCar.textContent = `${car.name} - ${car.year} - ${car.color}`;
  listCars.append(infoCar);
}
