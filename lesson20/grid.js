"use strict";
const list = document.getElementById("list");
let prevItem = null;

list.addEventListener("dblclick", function (event) {
  const target = event.target;
  console.log(`Event target : ${event.target.tagName}`);
  if (target.classList.contains("list-group-item")) {
    if (prevItem) {
      prevItem.classList.remove("bg-secondary-subtle");
    }
  }

  target.classList.add("bg-secondary-subtle");
  prevItem = target;
});
// ГОТВОВВОООООООО!!!!!!!!
