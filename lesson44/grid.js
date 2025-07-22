"use strict";

// Выбор элемента
const row = document.querySelector(".row");

const products = fetch("https://dummyjson.com/products?limit=10")
  .then((response) => response.json())
  .then((json) => json.products.forEach((product) => fillRow(product, row)));

function fillRow(product, row) {
  const productInfo = document.createElement("div");
  productInfo.className = "card col-4 mb-2";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.innerText = product.title;
  cardBody.append(title);

  const category = document.createElement("h5");
  category.className = "card-subtitle mb-2 text-body-secondary";
  category.innerText = product.category;
  cardBody.append(category);

  const description = document.createElement("p");
  description.className = "card-text";
  description.innerText = product.description;
  cardBody.append(description);

  productInfo.append(cardBody);
  row.append(productInfo);
}
