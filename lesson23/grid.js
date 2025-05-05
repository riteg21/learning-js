// 1 способ
"use strict";

const cardBtns = document.querySelectorAll(".btn-primary");
const cards = document.querySelectorAll(".card");

function CardMove(cardIndex) {
  let scrollMove =
    cards[cardIndex].getBoundingClientRect().height + window.scrollY;

  window.scrollTo({
    top: scrollMove,
    behavior: "smooth",
  });
}

for (let i = 0; i < cardBtns.length; i++) {
  cardBtns[i].addEventListener("click", function () {
    CardMove(i);
  });
}
