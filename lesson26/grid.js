"use strict";

// выбор элементов
const inputValue = document.querySelector(".form-control");
const btn = document.querySelector(".btn-outline-primary");
const finalAlert = document.querySelector(".alert");

// Math.floor(Math.random() * 5 + 1);

btn.addEventListener("click", function (event) {
  const randomNum = Math.floor(Math.random() * 5 + 1);
  console.log(randomNum);
  const inputValueNum = Number(inputValue.value);

  if (inputValueNum == randomNum) {
    finalAlert.classList.remove("alert-danger");
    finalAlert.classList.add("alert-success");
    finalAlert.innerHTML = "You win";
  } else {
    finalAlert.classList.remove("alert-success");
    finalAlert.classList.add("alert-danger");
    finalAlert.innerHTML = "You lose! The number was " + randomNum;
  }
  event.preventDefault();
});
