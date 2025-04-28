"use strict";
const form = document.forms["userForm"];
document.addEventListener("DOMContentLoaded", function () {
  form.username.value = "Peter";
  form.email.value = "peter@gmail.com";
  form.submit();
});

form.onsubmit = function (event) {
  event.preventDefault();
  alert(
    `User Name : ${this.username.value} \n User Email : ${this.email.value}`
  );
  this.reset();
};
