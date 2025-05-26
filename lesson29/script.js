"use strict";

// КОЛЛЕКЦИЯ ДОМ-ЭЛЕМЕНТОВ
const buttons = document.querySelectorAll("button");
console.log(buttons);

//  Выбор элеменгтов
const cardContainer = document.querySelector(".card-container");
const showUsersBtn = document.getElementById("show-users");
const showVipUsersBtn = document.getElementById("show-vip-users");
const sortByNameBtn = document.getElementById("sort-by-name");
const sortByAgeBtn = document.getElementById("sort-by-age");
const filterField = document.getElementById("filter-field");

const users = [
  {
    id: 1,
    name: "John Smith",
    status: "user",
    age: 25,
    backColor: "orange",
  },
  {
    id: 2,
    name: "Mary Brown",
    status: "vip user",
    age: 22,
    backColor: "orangered",
  },
  {
    id: 3,
    name: "Mike Stone",
    status: "user",
    age: 34,
    backColor: "seagreen",
  },
  {
    id: 4,
    name: "Lia Marshall",
    status: "user",
    age: 35,
    backColor: "chocolate",
  },
  {
    id: 5,
    name: "Max West",
    status: "vip user",
    age: 44,
    backColor: "greenyellow",
  },
  {
    id: 6,
    name: "Susan Rain",
    status: "user",
    age: 19,
    backColor: "lightsalmon",
  },
  {
    id: 7,
    name: "Sam Black",
    status: "vip user",
    age: 45,
    backColor: "purple",
  },
  {
    id: 8,
    name: "Miranda Dow",
    status: "user",
    age: 23,
    backColor: "teal",
  },
];

// обработчики события клик кнопок
showUsersBtn.onclick = function () {
  users.sort((item1, item2) => item1.id - item2.id);
  showUsers(users);
};
showVipUsersBtn.onclick = function () {
  const filteredUsers = users.filter((item) => item.status == "vip user"); //фильтрация только вип юзеров
  showUsers(filteredUsers);
};
sortByNameBtn.onclick = function () {
  users.sort((item1, item2) => item1.name.localeCompare(item2.name)); //localeCompare() — это метод строки в JavaScript, который используется для сравнения двух строк с учетом правил локали (языка и страны). Он возвращает числовое значение, указывающее, какая из строк должна идти раньше в отсортированном списке.
  showUsers(users);
};
sortByAgeBtn.onclick = function () {
  users.sort((item1, item2) => item1.age - item2.age); //сортировка по возрастанию
  showUsers(users);
};

// Обработчик события инпут
filterField.oninput = function () {
  const filteredUsers = users.filter((item) =>
    item.name.toLocaleLowerCase().includes(this.value.toLocaleLowerCase())
  );
  showUsers(filteredUsers);
};

// функция создания карточек пользователей
function showUsers(users) {
  cardContainer.innerHTML = "";
  users.forEach((item) => cardContainer.append(createUserCard(item)));
}

// Функция создания карточки пользователя
function createUserCard(user) {
  const cardWrapper = document.createElement("div");
  cardWrapper.className = "col-3 p-2";

  const card = document.createElement("div");
  card.className = "card p-4 d-flex flex-row";

  const cardImage = document.createElement("div");
  cardImage.className = "card-image rounded-circle me-4";
  cardImage.style.backgroundColor = user.backColor; //обращаемся к свойству массива - всем понятно и так

  const cardText = document.createElement("div");
  cardText.className = "flex-grow-1";

  const userName = document.createElement("h4");
  userName.className = "mb-2";
  userName.innerText = user.name;

  const userStatus = document.createElement("p");
  userStatus.className = "pb-2 border-bottom";
  userStatus.innerText = `Status: ${user.status}`;

  const userAge = document.createElement("p");
  userAge.className = "text-secondary";
  userAge.innerText = `Age: ${user.age}`;

  cardText.append(userName);
  cardText.append(userStatus);
  cardText.append(userAge);

  card.append(cardImage);
  card.append(cardText);

  cardWrapper.append(card);

  return cardWrapper;
}

// сорт меняет существующий массив короче, а филтер создает новый массив на основе исходного - зе энд;
