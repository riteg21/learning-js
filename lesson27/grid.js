"use strict";

//Выбор элементов
const commentForm = document.forms["comment-form"];
const inputCommentForm = commentForm.querySelector(".form-control");
const dataComment = document.getElementById("filtered-comment");

// Настройка хендлеров
inputCommentForm.addEventListener("focus", inputFocusHandler);
inputCommentForm.addEventListener("blur", inputBlurHandler);

function inputFocusHandler() {
  clearInput(this);
}

function clearInput() {
  inputCommentForm.classList.remove("is-valid", "is-invalid");
}

function inputBlurHandler() {
  const inputCommentFormData = inputCommentForm.value;
  if (inputCommentFormData.length >= 1) {
    inputCommentForm.classList.add("is-valid");
  } else {
    inputCommentForm.classList.add("is-invalid");
  }
}

commentForm.addEventListener("submit", commentFormSubmitHandler);

function commentFormSubmitHandler(event) {
  event.preventDefault();
  if (inputCommentForm.value) {
    printUserFormData(this);
  }
}

function printUserFormData() {
  addLine("Comment: ", inputCommentForm.value);
}

function addLine(key, value) {
  const p = document.createElement("p");
  p.className = "mb-2";
  p.innerHTML = `<span class="fw-bold">${key}</span>: ${value}`;
  dataComment.append(p);
}
