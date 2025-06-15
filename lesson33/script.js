"use strict";
// Выбор элементов
const alerts = document.querySelector(".alerts");

// Массив сообщений
const messages = [
  {
    type: "primary",
    text: "Please, enter your password",
    widthClass: "col-6",
    code: 1,
  },
  {
    type: "warning",
    text: "Password is to short",
    widthClass: "col-6",
    code: 2,
  },
  {
    type: "success",
    text: "Password is correct",
    widthClass: "col-6",
    code: 3,
  },
  {
    type: "danger",
    text: "Password is incorrect",
    widthClass: "col-6",
    code: 4,
  },
];

// Вызов функции создания информационного сообщения
alerts.append(createAlert());

// Деструктуризация объектов
let text, typeClass, widthClass;
({ text, type: typeClass, widthClass } = messages[0]);
alerts.append(createAlert(text, typeClass, widthClass));

({ text, type: typeClass, widthClass } = messages[1]);
alerts.append(createAlert(text, typeClass, widthClass));

({ text, type: typeClass, widthClass } = messages[2]);
alerts.append(createAlert(text, typeClass, widthClass));

({ text, type: typeClass, widthClass } = messages[3]);
alerts.append(createAlert(text, typeClass, widthClass));

// Деструктуризация массивов
const [, , successMessage, errorMessage] = messages;
console.log("success & error messsages: \n", successMessage, errorMessage);

// Знак троеточие
// 1. REST - остаточные параметры
const { text: successText, ...restSuccess } = successMessage;
console.log("success message parts: ", successText, restSuccess);

const [infoMessage, warningMessage, ...restMessages] = messages;
console.log("messages parts: ", infoMessage, warningMessage, restMessages);

// SPREAD - оператор расширения
const numbers = [2, 21, 5, 13, 35, 24];
console.log(`max numbers: ${Math.max(...numbers)}`);

// Трюки с деструктуризацией
// 1. Замена значений переменных
let str1 = "Message 1";
let str2 = "Message 2";
[str1, str2] = [str2, str1];
console.log(str1);

// 2. Умные параметры функции
alerts.append(createAlert(undefined, undefined, "col-8"));
alerts.append(createAlert2(messages[0]));
alerts.append(createAlert2(messages[1]));
alerts.append(createAlert2(messages[2]));
alerts.append(createAlert2(messages[3]));

// Трюки со знаком троеточие
// 1. Копирование массива
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1]; //копия массива
arr2.splice(3); // берем только первые три значения
console.log("arr1: ", arr1);
console.log("arr2: ", arr2);

//2. Поверхностное клонирование
const obj1 = { name: "John Smith", age: 35 };
const obj2 = { ...obj1 }; //клон объекта
obj2.name = "Jane Brown";
console.log("obj1: ", obj1);
console.log("obj2 :", obj2);

// Функция создания сообщения
function createAlert(
  text = "Test message",
  typeClass = "light",
  widthClass = "col-12"
) {
  return createBase(text, typeClass, widthClass);
}

function createAlert2({
  text = "Test Message",
  type: typeClass = "secondary",
  widthClass = "col-4",
  ...restParams
}) {
  console.log(`${typeClass} message rest: ${JSON.stringify(restParams)}`);
  return createBase(text, typeClass, widthClass);
}

function createBase(text, typeClass, widthClass) {
  const alertWrapper = document.createElement("div");
  alertWrapper.className = widthClass;
  const alert = document.createElement("div");
  alert.className = `alert alert-${typeClass}`;
  alert.innerText = text;
  alertWrapper.append(alert);
  return alertWrapper;
}
