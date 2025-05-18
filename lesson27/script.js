"use strict";

// выбор элементов
const userForm = document.forms["user-form"];
const userFormInput = userForm.querySelectorAll(".form-control");
const userFormData = document.getElementById("user-form-data");

// Добавление обработчиков событий focus/blur на поля ввода
for (let input of userFormInput) {
  input.addEventListener("focus", inputFocusHandler);
  input.addEventListener("blur", inputBlurHandler);
}

// Обработчики событий focus/blur
function inputFocusHandler() {
  clearInput(this);
}
function clearInput(input) {
  input.classList.remove("is-valid", "is-invalid");
  const inputFeedBackElement = input.closest("div").querySelector(".feedback");
  inputFeedBackElement.classList.remove("valid-feedback", "invalid-feedback");
  inputFeedBackElement.textContent = "";
}

function inputBlurHandler() {
  switch (
    this.id //перебор строк инпут по айди
  ) {
    case "name":
      validateName(this);
      break;
    case "email":
      validateEmail(this);
      break;
    case "nick":
      validateNick(this);
  }
}

// Валидация полей
function validateName(nameInput) {
  const name = nameInput.value;
  if (name.trim().includes(" ")) {
    markValid(nameInput);
    return true;
  } else {
    markInvalid(nameInput);
    return false;
  }
}
function validateEmail(emailInput) {
  const email = emailInput.value;
  if (email.match(/^\S+@\S+\.\S+$/)) {
    markValid(emailInput);
    return true;
  } else {
    markInvalid(emailInput, "Enter correct email address!");
    return false;
  }
}
function validateNick(nickInput) {
  const nick = nickInput.value;
  if (nick.startsWith("@")) {
    markValid(nickInput);
    return true;
  } else {
    markInvalid(nickInput, "Nick must have correct format!");
    return false;
  }
}

// результаты валидации
function markValid(inputElement, feedbackMassage = "Looks good!") {
  inputElement.classList.add("is-valid");
  const inputFeedBackElement = inputElement
    .closest("div")
    .querySelector(".feedback");
  inputFeedBackElement.classList.add("valid-feedback");
  inputFeedBackElement.textContent = feedbackMassage;
}

function markInvalid(inputElement, feedbackMassage = "You lose autorization!") {
  inputElement.classList.add("is-invalid");
  const inputFeedBackElement = inputElement
    .closest("div")
    .querySelector(".feedback");
  inputFeedBackElement.classList.add("invalid-feedback");
  inputFeedBackElement.textContent = feedbackMassage;
}

// Добавление обработчика отправки формы
userForm.addEventListener("submit", userFormHandler);

// Обработчик отправки формы
function userFormHandler(event) {
  event.preventDefault();
  if (
    validateName(this.name) &&
    validateEmail(this.email) &&
    validateNick(this.nick)
  ) {
    printUserFormData(this);
  }
}

function printUserFormData(form) {
  const name = form.name.value.trim(); //удаляются все пробелы
  const spaceIndex = name.indexOf(" "); //пробел между first name и lastname
  const firstName = name.slice(0, spaceIndex); //слово до пробела(имя)
  const lastName = name.slice(spaceIndex + 1); //слово после пробела(фамилия)
  addLine(
    "First name",
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() // toUpperCase - буквы верхнего регистра, toLowerCase - буквы нижнего регистра
  );
  addLine(
    "Last name",
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()
  );
  addLine("Email", form.email.value);
  addLine("Nick", form.nick.value);
}

function addLine(key, value) {
  const p = document.createElement("p");
  p.className = "mb-2";
  p.innerHTML = `<span class="fw-bold">${key}</span>: ${value}`;
  userFormData.append(p);
}

// Очистка формы
userForm.resetBtn.onclick = function () {
  userForm.reset();
  userFormData.innerHTML = "";
  for (let input of userFormInput) {
    clearInput(input);
  }
};
