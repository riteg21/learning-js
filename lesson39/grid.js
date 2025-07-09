"use strict";

//выбор элементов
const listElems = document.querySelectorAll("ul");
console.log(listElems);
// пишем рекурсивную функцию для добавления всем элементам неупорядоченного списка класса list-group-item

function addClass(listElems) {
  const items = listElems.querySelectorAll(":scope > li");
  items.forEach((item) => {
    item.classList.add("list-group-item");
    // если внутри li есть вложенный список ul
    const nestedUl = item.querySelector(":scope > ul"); //это CSS-селектор, который использует псевдокласс :scope для выбора прямых потомков (>) элемента ul относительно текущего элемента (item).
    if (nestedUl) {
      addClass(nestedUl);
    }
  });
}
listElems.forEach((ul) => addClass(ul));
