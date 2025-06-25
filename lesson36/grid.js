"use strict";

// Выбор элементов
const form = document.forms["year-type"];
const formBtn = document.querySelector(".btn-success");
const infoYear = document.querySelector(".alert");

form.onsubmit = function (event) {
  event.preventDefault();
  const year = form.year.value;
  if (year) {
    leapIs(year);
  }
};

infoYear.addEventListener("change", leapIs);

// function leapIs(year) {
//   if (year % 4 == 0) {
//     infoYear.innerText = "This year is leap";
//   } else {
//     infoYear.innerText = `This year is not leap`;
//   }
// }

function leapIs(year) {
  const date = new Date(year, 1, 29);
  console.log(date);
  if (date.getMonth() === 1) {
    infoYear.innerText = "This year is leap";
  } else {
    infoYear.innerText = "This year is not leap";
  }
}
