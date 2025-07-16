"use strict";

const listGroupBooks = document.querySelector(".list-group");
const loadingBooks = document.querySelector(".alert-dark");

const books = [
  { id: 1245, title: "Mathematics", author: "Kevin Klyan" },
  { id: 1638, title: "PYTHON cookbook", author: "Mark Edward" },
  { id: 3279, title: "Animal life", author: "Mary Stone" },
  { id: 4055, title: "Fantastic world", author: "Merliin Keeper" },
  { id: 3780, title: "London tube", author: "Bill Tortle" },
];

books.forEach((book, index) => {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.style.opacity = "0";
  li.innerText = `Title: ${book.title}, Author: ${book.author}`;
  listGroupBooks.append(li);
  setTimeout(() => {
    li.style.opacity = "1";

    setTimeout(() => {
      if (index == books.length - 1) {
        loadingBooks.classList.remove("alert-dark");
        loadingBooks.classList.add("alert-success");
        loadingBooks.style.opacity = "1";
        loadingBooks.innerText = "All books are loaded";
      }
    }, 1000);
  }, index * 3000);
});
