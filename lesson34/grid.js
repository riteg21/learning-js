"use strict";

// Выбор элементов
const infoGroup = document.getElementById("list-1");
const categoryGroup = document.getElementById("list-2");

// Массив книжек
const books = [
  {
    id: 2457,
    title: "Last days of Rome",
    author: "Susan Stone",
    category: "history",
  },
  {
    id: 1375,
    title: "Basics of Optic",
    author: "Mike Brown",
    category: "physics",
  },
  {
    id: 3584,
    title: "Integral calcus",
    author: "Alex Grey",
    category: "mathematics",
  },
  {
    id: 2605,
    title: "French revolution",
    author: "Marta Bee",
    category: "history",
  },
  {
    id: 2694,
    title: "Elementary algebra",
    author: "Lucas Asthon",
    category: "mathematics",
  },
  {
    id: 3946,
    title: "Mechanics principles",
    author: "Barbara Swan",
    category: "physics",
  },
  {
    id: 7380,
    title: "Old Greece democrats",
    author: "Charles Black",
    category: "history",
  },
  {
    id: 4836,
    title: "Molecular structure",
    author: "Tom Brain",
    category: "physics",
  },
];

// Массив количесва книжек
const bookCounts = [
  { id: 2457, count: 24 },
  { id: 1375, count: 13 },
  { id: 3584, count: 6 },
  { id: 2605, count: 7 },
  { id: 2694, count: 31 },
  { id: 3946, count: 27 },
  { id: 7380, count: 5 },
  { id: 4836, count: 3 },
];
// Коллекция мап с ключом ввиде объекта каждой книжки и значением ввиде количетсва книжек
const booksMap = new Map();

const countToId = {};
bookCounts.forEach((item) => {
  countToId[item.id] = item.count;
});

books.forEach((book) => {
  booksMap.set(book, countToId[book.id]);
});

console.log(booksMap);
console.log(countToId);

// Коллекция сет где будут только категории книжек
const categoryBooks = books.map((item) => item.category);

console.log(categoryBooks);

// list1 - информация о книгах

function createListInfo() {
  infoGroup.innerHTML = "";
  books.forEach((item) => {
    const itemInfoGroup = document.createElement("li");
    itemInfoGroup.className = "list-group-item";
    itemInfoGroup.style.color = "#EE82EE";
    itemInfoGroup.innerText = `${item.title} : ${booksMap.get(item)}`;
    infoGroup.append(itemInfoGroup);
  });
}
createListInfo();

//list2 - категории книг
function createListCategory() {
  categoryGroup.innerHTML = "";
  categoryBooks.forEach((item) => {
    const itemCategoryBook = document.createElement("li");
    itemCategoryBook.className = "list-group-item";
    itemCategoryBook.style.color = "#FA8072";
    itemCategoryBook.innerText = `${item}`;
    categoryGroup.append(itemCategoryBook);
  });
}

createListCategory();
