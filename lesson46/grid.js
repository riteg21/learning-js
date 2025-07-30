"use strict";

// Выбор элементов
const btnAddParams = document.querySelector(".btn-success");
const alertParams = document.querySelector(".alert");

// add parameters btn
btnAddParams.onclick = function () {
  const url = new URL(
    "http://127.0.0.1:5501/lesson46/grid.html?page=1&word=history&part=4"
  );
  //   location.replace(url);
  for (let [name, value] of url.searchParams) {
    addInfoItem(name, value);
  }
};

function addInfoItem(name, value) {
  const p = document.createElement("p");
  p.innerHTML = `<b>${name} : </b> ${value}`;
  p.className = "mb-2";
  alertParams.append(p);
}
