"use strict";

// элемент для работы
const list = document.querySelector(".list-group");

const fruit = {
  name: "apple",
  price: 25,
  code: 1347,
  country: "Greece",
  provider: "South Wind",
};

Object.entries(fruit).forEach(([key, value]) => {
  list.append(createItem(key, value));
});

function createItem(key, value) {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerText = `${key} : ${value}`;
  return li;
}
