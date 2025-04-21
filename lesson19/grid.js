"use strict";

const cardInfo = document.getElementById("card");
const buttonH = document.querySelector(".btn-success");

function cardReview() {
  const titleElement = cardInfo.querySelector(".card-title");
  alert(titleElement.innerText);
  alert(cardInfo.innerHTML);
}

function buttonHeandler() {
  if (this.classList.contains("btn-success")) {
    //Первая логика
    cardInfo.addEventListener("click", cardReview);
    this.classList.remove("btn-success");
    this.classList.add("btn-danger");
    this.innerText = "You can't read cardInfo";
  } else {
    //Вторая логика
    cardInfo.removeEventListener("click", cardReview);
    this.classList.remove("btn-danger");
    this.classList.add("btn-success");
    this.innerText = "You can read cardInfo";
  }
}

buttonH.addEventListener("click", buttonHeandler);
