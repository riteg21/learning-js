"use strict";

const cardDiv = document.querySelector(".card");
const cardTitle = cardDiv.querySelector(".card-title");
const cardButton = cardDiv.querySelector("a");
const headinG1 = document.getElementById("heading1");
console.log(cardDiv);
console.log(cardTitle);
console.log(cardButton);

const cardDivAttribute = cardDiv.attributes;
for (let attribute of cardDivAttribute) {
  console.log(`${attribute.name} : ${attribute.value}`);
}
console.log("........");
const cardTitleAttribute = cardTitle.attributes;
for (let attribute of cardTitleAttribute) {
  console.log(`${attribute.name} : ${attribute.value}`);
}
console.log("........");
const cardButtonAttribute = cardButton.attributes;
for (let attribute of cardButtonAttribute) {
  console.log(`${attribute.name} : ${attribute.value}`);
}
console.log("........");
console.log(headinG1.hasAttribute("id"));
headinG1.removeAttribute("id");
console.log(headinG1.getAttribute("id"));
headinG1.setAttribute("id", "main-heading");
console.log(headinG1.getAttribute("id"));
