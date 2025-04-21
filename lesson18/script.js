"use strict";

// ДОБАВЛЕНИЕ ОБРАБОТЧИКОВ СОБЫТИЯ
// DOM-свойство
const btnSecondary = document.querySelector(".btn-secondary");
btnSecondary.onclick = function () {
  alert("Hello form Secondary Button");
};

// HTML-атрибуты связаны с DOM-свойствами
console.log(
  "onclick DOM property ; ",
  document.querySelector(".btn-primary").onclick
);

// Метод addEventListener
const btnSuccess = document.querySelector(".btn-success");
function btnSuccessHandler() {
  alert("Hello from Success button");
}
btnSuccess.addEventListener("click", btnSuccessHandler);

// this в функциях обработчика - ТЕКУЩИЙ ЭЛЕМЕНТ
btnSuccess.addEventListener("click", function () {
  console.log("this in Event handler :", this);
});

// ОБЪЕКТ СОБЫТИЯ
const btnDanger = document.querySelector(".btn-danger");
function btnDangerHandler(event) {
  alert("Hello grom Danger Button");
  console.log("event type : ", event.type); // ивент который произошел
  console.log("event currentTarget :", event.currentTarget); // на какой кнопке произошел данный ивент
}
btnDanger.addEventListener("click", btnDangerHandler);

// отмена действий браузера по умолчанию
// return false
const BtnLink = document.querySelector(".btn-warning");
BtnLink.onclick = function (event) {
  alert("This Link is Blocked");
  console.log("default prevented", event.defaultPrevented);
  return false;
};

// preventDefault метод

const btnSubmit = document.querySelector("[type='submit']");

function btnSubmitHandler(event) {
  event.preventDefault();
  alert("Form Submit is Blocked");
  console.log("Default Prevented : ", event.defaultPrevented);
}

btnSubmit.addEventListener("click", btnSubmitHandler);
