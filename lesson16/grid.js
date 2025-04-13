"use strict";

console.log("... #4 ...");
const cardHeader = document.querySelector(".card-header");
console.log(cardHeader);
cardHeader.style.cssText = `
                            background-color: #d1e7dd
                            `;
const buttonSuccess = document.querySelector(".btn");
console.log(buttonSuccess);
buttonSuccess.classList.remove("btn-primary");
buttonSuccess.classList.add("btn-success");
