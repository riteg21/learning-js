"use strict";

// Выбор элементов
const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const form = document.forms["comment-form"];
const alert = document.querySelector(".alert pre");

// Fetch()
// Получение данных
// Пример 1. Обработка результата промиса методом then
// fetch отправляет HTTP-запрос к указанному URL
const users = fetch("https://dummyjson.com/users?limit=5") //отправляем только 5 первых юзеров. почему? limit=5; результатом метода fetch является промис который завершается телом ответа response - это объект ответа от сервера
  .then((response) => response.json()) //здесь мы преобразуем тело ответа из формата json в обычный js объект
  .then((json) => json.users.forEach((user) => fillRow(user, table1))); // json(это название задаем мы если что) - это уже распарсенный объект с данными от сервера .для массива используем метод forEach в котором для каждого пользователя производим следующие действия

function fillRow(user, table) {
  const tr = document.createElement("tr");
  for (let i = 0; i < 4; i++) {
    tr.append(createCell(user, i));
  }
  table.tBodies[0].append(tr);
}

function createCell(user, i) {
  const td = document.createElement("td");
  let content;
  switch (i) {
    case 0:
      content = user.id;
      break;
    case 1:
      content = `${user.firstName} ${user.lastName}`;
      break;
    case 2:
      content = user.email;
      break;
    case 3:
      content = user.address.city;
      break;
  }
  td.innerText = content;
  return td;
}

// Пример 2. Обработка результата промиса при помощи ключевого слова await
async function getPost(id) {
  // получение заголовка ответа
  const response = await fetch(`https://dummyjson.com/posts/${id}`); // получаем пост по заданному индификатору. благодаря await - процесс четко разделен на 2 этапа - в начале с сервера получаются заголовки ответа в виде объекта responce - затем тело ответа которое преобразуется из формата json
  console.log(response);
  //   получение тела ответа в формате json
  return await response.json();
}

const post1 = getPost(5).then((res) => console.log(res));

// Отправка данных
const postUrl = "https://dummyjson.com/comments/add"; //это адрес API, куда будут отправляться данные
form.onsubmit = async function (event) {
  event.preventDefault();
  alert.innerText = "";
  const formData = formPostData(this); // Получаем данные формы в JSON-формате
  this.reset();

  if (!this.xhr.checked) {
    const result = await fetchSend(postUrl, formData); //отправляет данные на сервер
    alert.innerText = JSON.stringify(result, null, 2);
  } else {
    xhrSend(postUrl, formData);
  }
};

function formPostData(form) {
  //   const formData = JSON.stringify({
  //     //превращает объект в JSON-строку
  //     body: form.body.value,
  //     userId: 4,
  //     postId: form.postId.value,
  //   });
  const formData = new FormData(form);
  formData.append("userId", 4); //key : value
  formData.delete("xhr");

  for (let [name, value] of formData) {
    console.log(`${name} : ${value}`);
  }

  return formData;
}

// отправка методом fetch()
async function fetchSend(url, data) {
  const res = await fetch(url, {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },

    body: data,
  });
  return await res.json();
}

// отправка методами XMLHttpRequest
function xhrSend(url, data) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("POST", url);
  xhr.send(data);
  xhr.onload = () => (alert.innerText = JSON.stringify(xhr.response, null, 2));
}

// XMLHttpRequest
// 1. Создание объекта XMLHttpRequest
const xhr = new XMLHttpRequest();
//2. инициализация и настройка GET-запроса по URL
xhr.open("GET", "https://dummyjson.com/users?limit=5");
xhr.responseType = "json";
// 3. Отправвка запроса
xhr.send();
// 4. Обработка ответов сервера
xhr.onload = function () {
  if (xhr.status != 200) {
    console.log(`Error ${xhr.status} : ${xhr.statusText}`);
  } else {
    xhr.response.users.forEach((user) => fillRow(user, table2));
  }
};

xhr.onprogress = function (event) {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`);
  }
};

xhr.onerror = function () {
  console.log("Error");
};
