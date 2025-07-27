"use strict";

// Выбор элементов
const title = document.getElementById("title");
const price = document.getElementById("price");
const showProductsBtn = document.querySelector(".btn-danger");
const formCreate = document.forms["form-create"];
const alertMessage = document.getElementById("product-cards");

// добавленные продукты
const products = getProductsFromStorage();

// сабмит формы по отправке продуктов в локал-стораге
formCreate.onsubmit = function (event) {
  event.preventDefault();
  const titleValue = title.value;
  const priceValue = price.value;
  addProductsToLocalStorage(titleValue, priceValue);
  this.reset();
};

function addProductsToLocalStorage(title, price) {
  const product = {
    title: title,
    price: price,
  };
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
}

// Получение товара из массива
function getProductsFromStorage() {
  return JSON.parse(localStorage.getItem("products")) ?? [];
}

// show products
showProductsBtn.onclick = () => {
  alertMessage.innerHTML = "";
  const products = getProductsFromStorage();
  if (products.length) {
    for (let product of products) {
      alertMessage.append(addProductToHistory(product));
    }
  }
};

function addProductToHistory(product) {
  const div = document.createElement("div");
  div.className = "card mb-3 col-2 bg-light";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.innerText = `${product.title}`;
  cardBody.append(h5);

  const p = document.createElement("p");
  p.className = "card-text";
  p.innerText = `${product.price}`;
  cardBody.append(p);

  div.append(cardBody);
  return div;
}
