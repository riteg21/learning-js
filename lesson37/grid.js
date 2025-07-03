"use strict";

// Выбор элементов
const form = document.forms.userForm;
const tableBody = document.querySelector(".table").tBodies[0];

// Плохой код
// form.onsubmit = function (event) {
//   event.preventDefault();
//   const name = form.name.value;
//   const age = form.age.value;
//   const row = document.createElement("tr");
//   const td1 = document.createElement("td");
//   td1.innerText = tableBody.rows.length + 1;
//   row.append(td1);
//   const td2 = document.createElement("td");
//   td2.innerText = name;
//   row.append(td2);
//   const td3 = document.createElement("td");
//   td3.innerText = age;
//   row.append(td3);
//   tableBody.append(row);
//   form.reset();
// };

// Хороший код
form.addEventListener("submit", formActionHandler);

function formActionHandler(event) {
  event.preventDefault();
  addTD();
  form.reset();
}

function addTD() {
  const row = document.createElement("tr");
  row.append(addID());
  row.append(addName());
  row.append(addAge());
  tableBody.append(row);
}

function addID() {
  const idTD = document.createElement("td");
  idTD.innerText = tableBody.rows.length + 1;
  return idTD;
}

function addName() {
  const name = form.name.value;
  const nameTD = document.createElement("td");
  nameTD.innerText = name;
  return nameTD;
}

function addAge() {
  const age = form.age.value;
  const ageTD = document.createElement("td");
  ageTD.innerText = age;
  return ageTD;
}
