"use strict";

const html = document.documentElement;
const head = document.head;
const body = document.body;
const titleOfHead = document.head.querySelector("title");
console.log("body children elements:", body.children);
console.log("first child element", body.firstElementChild);
console.log("parent element", body.parentElement);

console.log("title element of head:", head.children[2]);
