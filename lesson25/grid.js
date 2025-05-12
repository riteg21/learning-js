"use strict";
const columns = document.querySelectorAll(".bg-light");
const yellowBlock = document.querySelector(".bg-warning");

yellowBlock.draggable = true;
yellowBlock.addEventListener("dragstart", function (event) {
  event.target.classList.add("shadow-sm");
  event.dataTransfer.setData("text/plain", event.target.tagName);
  for (let column of columns) {
    column.addEventListener("dragover", function (event) {
      event.preventDefault();
    });
    column.addEventListener("drop", function () {
      column.append(yellowBlock);
    });
    columns[1].addEventListener("dragend", function (event) {
      event.target.classList.remove("shadow-sm");
    });
  }
  //
  //
});
