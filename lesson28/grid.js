"use strict";

// Выбор элментов
const eatForm = document.forms["product-form"];
const eatFormInputs = eatForm.querySelectorAll(".form-control");
const eatJsonData = document.getElementById("json-data");
const eatFormBtn = document.querySelector(".btn-primary");

// Написание скрипта под обработчик валидации
eatForm.noValidate = true;

eatForm.addEventListener("submit", validateEatForm);

function validateEatForm(event) {
  event.preventDefault();
  if (!this.checkValidity()) {
    event.stopImmediatePropagation();
    this.classList.add("was-validated");
  } else {
    createData(this);
    objectToJSON();
    this.reset();
    this.classList.remove("was-validated");
  }
}

const data = {};
let jsondata;

function createData(form) {
  data.title = form.title.value;
  data.desc = form.desc.value;
  data.price = +form.price.value;
}

eatFormBtn.addEventListener("click", printJSON);

function objectToJSON() {
  jsondata = JSON.stringify(data, 4);
  printJSON(jsondata);
}

function printJSON(json) {
  eatJsonData.textContent = json;
}
