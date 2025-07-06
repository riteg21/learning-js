"use strict";

// Выбор элементов
const btn = document.querySelector(".btn");
const alertMessages = document.querySelectorAll(".info");

const user = {
  name: "John Smith",
  age: 27,
  address: "45/90, 5th Avenu, New-York, 2467",
};

function getInfo(key) {
  return this[key];
}

btn.addEventListener("click", clickHandler);
function clickHandler() {
  alertMessages[0].innerText = getInfo.call(user, "name");
  alertMessages[1].innerText = getInfo.call(user, "age");
  alertMessages[2].innerText = getInfo.call(user, "address");
}
