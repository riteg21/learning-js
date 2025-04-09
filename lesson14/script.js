"use strict";

console.log("... Методы выбора элементов ...");
console.log(".. querySelector ..");
const heading1 = document.querySelector("h1");
console.log("heading1 : ", heading1);

console.log(".. querySelectorAll ..");
const cards = document.querySelectorAll(".card");
console.log("cards : ", cards);

console.log("... getElementById ...");
const alert = document.getElementById("alert");
console.log("alert : ", alert);

console.log("... getElementsByClassName ...");
const buttons = document.getElementsByClassName("btn");
console.log("btns : ", buttons);

console.log("... getElementsByTagName ...");
const headings3 = document.getElementsByTagName("h3");
console.log("headings3 :", headings3);

console.log("... getElementsByName ...");
const alerts = document.getElementsByName("alert");
console.log("alerts : ", alerts);

console.log(".... СТАТИЧЕСКИЕ И ДИНАМИЧЕСКИЕ КОЛЛЕКЦИИ  ....");
const staticCollection = document.querySelectorAll(".row");
const liveCollection = document.getElementsByClassName("row");

// Коллекици до добавления новой строки
console.log("staticColection length before : ", staticCollection.length);
console.log("liveCollection length before : ", liveCollection.length);

// Создание новой строки
const newRow = document.createElement("div");
newRow.className = "row";
document.querySelector(".container").append(newRow);

// Коллекции после добавления новой строки
console.log("staticCollection after: ", staticCollection.length);
console.log("liveCollection after : ", liveCollection.length);

console.log("... Методы и свойства Document/Element ...");
console.log("heading1 next sibling Element : ", heading1.nextElementSibling);
console.log("1st row children : ", liveCollection[0].children);

console.log(".... Дополнительные элементы объекта Element ....");
console.log("... Метод closest ...");
const cardText = cards[0].querySelector(".card-text");
console.log("card closest element : ", cardText.closest(".card"));
// ищет ближайшего предка

console.log("... Метод contains ...");
console.log("card contains card text : ", cards[0].contains(cardText));
console.log("card contains card : ", cards[0].contains(cards[0]));
console.log(
  "card contains cards image : ",
  cards[0].contains(cards[0].querySelector(".card-image"))
);
// проверяет содержит ли элемент какой-либо заданный элемент

console.log("... Метод matches ...");

console.log("heading1 has py-4 class : ", heading1.matches(".py-4"));
console.log("alert has disabled attribute : ", alert.matches("[disabled]"));
