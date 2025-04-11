"use strict";

// Email wrapper
const emailWrapper = document.querySelectorAll("form .mb-3")[0];
// Email.input
const emailInput = document.getElementById("email");
// Email label textNode
const emailLabelText = emailWrapper.querySelector('[for="email"]').firstChild;

console.log("... DOM узлы - это объекты ...");
console.log("typeof emailInput :", typeof emailInput);
console.log("emailInput nodeType : ", emailInput.nodeType);
console.log("nodeType into emailInput : ", "nodeType" in emailInput);
console.log("emailInput : ", emailInput);

console.dir(emailInput);

console.log("... TextNode properties ...");
console.log("nodeValue : ", emailLabelText.nodeValue); // текстовый узел
console.log("data : ", emailLabelText.data); // текстовый узел
console.log("length : ", emailLabelText.length); // длина слова, так как слово email состоит из 5 символов

console.log("... Element properties ...");
console.log("tagName : ", emailWrapper.tagName);
console.log("innerText : ", emailWrapper.innerHTML); //без самого родительского узла div
console.log("outherHTML : ", emailWrapper.outerHTML); // с ним
console.log("innerText : ", emailWrapper.innerText);

console.log("... Свойства-атрибуты ...");
console.log("id : ", emailInput.id);
console.log("name : ", emailInput.name);
console.log("title : ", emailInput.title);
console.log("className : ", emailInput.className);
console.log("Type : ", emailInput.type);

console.log("... Доступ к HTML-атрибутам ...");
console.log("emailInput has title : ", emailInput.hasAttribute("title")); // осуществляем проверку
emailInput.setAttribute("title", "Email"); // задаем атрибут
console.log("emailInput title : ", emailInput.getAttribute("title")); // получаем значение
console.log("emailInput has title : ", emailInput.hasAttribute("title")); // снова проверяем
emailInput.removeAttribute("title"); //удаляем
console.log("emailInput has title : ", emailInput.hasAttribute("title")); //снова проверяем

console.log("... Коллекция HTML-атрибутов ...");
const emailInputAttributes = emailInput.attributes;
for (let attribute of emailInputAttributes) {
  console.log(`${attribute.name} : ${attribute.value}`);
}

console.log("... data-АТРИБУТЫ ...");
const emailInputDataSet = emailInput.dataset;
console.log(("data-status : ", emailInputDataSet.status));

console.log("... Синхронизация атрибутов и св-в ...");
emailInput.name = "new email";
console.log("Name propetry : ", emailInput.name);
console.log("Name attribute : ", emailInput.getAttribute("name"));

emailInput.setAttribute("value", "email");
emailInput.value = "new email";
console.log("Value propetry : ", emailInput.value);
console.log("Value attribute : ", emailInput.getAttribute("value"));
