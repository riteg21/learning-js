"use strict";

// Выбор элементов
const petSelect = document.getElementById("pet-select");
const toDoListBtn = document.querySelector(".btn-success");
const infoPage = document.querySelector(".alert-warning");

// Массив данных под задачи
const toDoList = [
  { id: 1, text: "read the book", priority: "low" },
  { id: 2, text: "wash a car", priority: "middle" },
  { id: 3, text: "buy products", priority: "high" },
  { id: 4, text: "fix the chair", priority: "middle" },
  { id: 5, text: "cook dinner", priority: "high" },
  { id: 6, text: "call Dashulya", priority: "high" },
];

// Занесение значений в выпадающий список select

fillPetsToDoSelect(petSelect, toDoList);

function fillPetsToDoSelect(select, toDoList) {
  toDoList.forEach((item) => {
    const option = new Option(item.text, item.id);
    select.append(option);
  });
}

toDoListBtn.addEventListener("click", getPetInfo);

function getPetInfo() {
  const pet = getPet();
  if (pet) {
    infoPage.innerText = `ToDo Pet: ${calcAvPet(pet)}`;
  }
}

const toDoCache = new WeakMap();

function getPet() {
  const petId = +petSelect.value;
  const pet = toDoList.find((item) => item.id == petId);
  return pet ?? null;
}

function calcAvPet(pet) {
  if (!toDoCache.has(pet)) {
    const computedValue = `Name: ${pet.text} (ID: ${pet.id})`;
    toDoCache.set(pet, computedValue);
  }
  return toDoCache.get(pet);
}
