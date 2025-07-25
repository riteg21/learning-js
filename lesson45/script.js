"use strict";

//Способы хранения данных в браузере
//  cookie -хранилище небольших строковых данных типа ключ-значение, webStorage - тоже самое что куки но не отправляются данные на сервер, Indexed DB - зранилище в виде бд нереляционного (NOSQL) типа

// Выбор элементов
const usersTable = document.getElementById("users-table");
const authForm = document.forms["auth-form"];
const authUserMessage = document.getElementById("auth-user-message");
const userHistoryMessage = document.getElementById("user-history-message");

// Аутентифицированные пользователи
const users = getUsersFromStorage();

// Отображение пользователей
getUsers().then((users) => fillTable(users, usersTable));

// Получение пользователей
async function getUsers() {
  const response = await fetch("https://dummyjson.com/users?limit=5");
  const json = await response.json();
  const users = json.users.map((item) => ({
    //создаем новый массив где вычленяем все необходимое из исходного массива
    id: item.id,
    username: item.username,
    password: item.password,
  }));
  console.log(users);
  return users;
}

// Занесение пользователей в таблицу
function fillTable(users, table) {
  users.forEach((user) => {
    table.tBodies[0].insertAdjacentHTML(
      "beforeend",
      `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.username}</td>
                    <td>${user.password}</td>
                </tr>    
            `
    ); //позволяет вставлять HTML-строку относительно заданного элемента. Он вставляет HTML как текст, а не как DOM-узел. Метод принимает два аргумента: позицию вставки и строку HTML.
  });
}

// Отправка формы аутентификации
authForm.onsubmit = async function (event) {
  event.preventDefault();
  const data = new FormData(this); //используется для создания объекта, который представляет собой набор пар ключ/значение, предназначенный для представления данных формы HTML
  const response = await sendData(data);
  console.log("sf", response);
  this.reset();
  if (response.status) {
    console.log(response.result);
    createCookie(response.result);
    addUsersToStorage(response.result);
  } else {
    console.warn(response.result.message);
  }
};

// Аутентификация
async function sendData(data) {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      body: data,
      //   credentials: "include", //указывает, что нужно отправлять куки и заголовки авторизации
    });
    const status = response.ok; // булево значение, указывающее на успешность запроса (true для статусов 200-299)
    const result = await response.json();
    return { status, result };
  } catch (error) {
    console.warn(`Error: ${error.message}`);
  }
}

// Добавление куки
function createCookie(response) {
  setCookie("accessToken", response.accessToken);
  setCookie("refreshToken", response.refreshToken);
}

// Получение текущего аутентифицированного пользователя
authForm["get-current-user"].onclick = async () => {
  authUserMessage.innerHTML = "";
  try {
    const response = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    const status = response.ok;
    const user = await response.json();
    if (status) {
      authUserMessage.insertAdjacentHTML(
        "beforeend",
        `
                    <div><b>id:</b> ${user.id}</div>
                    <div><b>first name:</b> ${user.firstName}</div>
                    <div><b>last name:</b> ${user.lastName}</div>

                `
      );
    }
  } catch (error) {
    console.warn(`Error: ${error.message}`);
  }
};

// Получение пользователей из localStorage
function getUsersFromStorage() {
  return JSON.parse(localStorage.getItem("users")) ?? []; //если запись с ключом users имеется в хранилище возвращается массив пользователей, иначе пустой массив
}

// Добавление пользователя в localStorage
function addUsersToStorage(user) {
  const { id, firstName, lastName } = user;
  users.push({
    id,
    firstName,
    lastName,
  });
  localStorage.setItem("users", JSON.stringify(users)); // добавляем в локалстораге массив users json объект зарегистрированного пользователя
}

// Обновление истории
authForm["update-history"].onclick = () => {
  userHistoryMessage.innerHTML = "";
  const users = getUsersFromStorage();
  if (users.length) {
    for (let user of users) {
      userHistoryMessage.append(addUserToHistoryMessage(user));
    }
  }
};

//Добавление элемента пользователя
function addUserToHistoryMessage(user) {
  const div = document.createElement("div");
  div.className = "badge rounded-pill text-bg-primary me-2";
  div.innerText = user.firstName + " " + user.lastName;
  return div;
}
