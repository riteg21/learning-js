"use strict";

// Выбор элементов
const userForm = document.forms["user-form"];
const userFormInputs = userForm.querySelectorAll(".form-control");
const jsonBtn = document.getElementById("to-json-btn");
const objBtn = document.getElementById("to-object-btn");
const userFormData = document.getElementById("user-form-data");
const jsonData = document.getElementById("user-json-data");

// Constraint Validation API
// Отключение проверк иформы по умолчанию
userForm.noValidate = true;

// Добавление обработчика отправки формы
userForm.addEventListener("submit", validateUserForm);

function validateUserForm(event) {
  // Валидация отдельных полей
  for (let input of userFormInputs) {
    const feedbackElement = input
      .closest("div")
      .querySelector(".invalid-feedback");
    const validationStatus = input.validity;
    // Кастомные сообщения об ошибках
    const message = validationStatus.valueMissing
      ? "Field is required"
      : validationStatus.patternMismatch
      ? "Enter correct data"
      : validationStatus.tooShort
      ? "Data must contains min 4 symbols"
      : validationStatus.typeMismatch
      ? "Enter coorect data"
      : "";
    input.setCustomValidity(message);
    feedbackElement.innerText = input.validationMessage;
  }
  // Валидация формы
  event.preventDefault();
  if (!this.checkValidity()) {
    //чеквалидити - проверка на валидность полей формы
    event.stopImmediatePropagation();
    this.classList.add("was-validated");
  } else {
    createUser(this);
    printUser();
    this.reset(); //очищение строк валидации при правильном введении строк в инпут
    this.classList.remove("was-validated");
  }
}

// Обьект пользователя
const user = {};
let stringifyUser;

function createUser(form) {
  user.name = form.name.value;
  user.email = form.email.value;
  user.nick = form.nick.value;
  user.age = +form.age.value;
}

function printUser() {
  userFormData.innerHTML = `{
        name: ${user.name},
        email: ${user.email},
        nick: ${user.nick},
        age: ${user.age}
    }`;
}

// преобразование объекта в JSON
jsonBtn.addEventListener("click", function () {
  stringifyUser = JSON.stringify(user, replacerFunc, 4); //Преобразует объект user в JSON-строку с помощью метода JSON.stringify().
  // user: Объект, который нужно преобразовать в JSON.
  // 4: Количество пробелов для отступов в JSON-строке. Это делает JSON-строку более читаемой.
  printJSON(stringifyUser);
  console.log(typeof stringifyUser);

  function replacerFunc(key, value) {
    if (key == "nick") value = value.slice(1); //убираем символ @ в начале
    return value;
  }

  function printJSON(json) {
    jsonData.innerHTML = json;
  }
});

// Преобразование из JSON в объект
objBtn.onclick = function () {
  const obj = JSON.parse(stringifyUser, reviver);
  console.log(obj);
};

function reviver(key, value) {
  if (key == "nick") value = `@${value}`;
  return value;
}
