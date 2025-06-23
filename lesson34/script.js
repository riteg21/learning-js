"use strict";

// Массив продуктов
const products = [
  {
    id: 1,
    title: "meat",
    price: 45,
    icon: "drumstick-bite",
    category: "meat",
  },
  {
    id: 2,
    title: "eggs",
    price: 25,
    icon: "egg",
    category: "meat",
  },
  {
    id: 3,
    title: "milk",
    price: 16,
    icon: "bottle-water",
    category: "milk products",
  },
  {
    id: 4,
    title: "bread",
    price: 8,
    icon: "bread-slice",
    category: "bread",
  },
  {
    id: 5,
    title: "fresh fish",
    price: 38,
    icon: "fish",
    category: "fish",
  },
  {
    id: 6,
    title: "burger",
    price: 14,
    icon: "burger",
    category: "fastfood",
  },
  {
    id: 7,
    title: "lemon",
    price: 7,
    icon: "lemon",
    category: "vegetables",
  },
  {
    id: 8,
    title: "carrot",
    price: 3,
    icon: "carrot",
    category: "vegetables",
  },
  {
    id: 9,
    title: "cookie",
    price: 18,
    icon: "cookie",
    category: "bread",
  },
];

// Добавление продуктов на страницу
const productsWrapper = document.querySelector(".products");
addProducts(products);

function addProducts(products) {
  productsWrapper.innerHTML = "";
  products.forEach((item) => productsWrapper.append(createProduct(item)));
  addDragable();
}

function createProduct(product) {
  const wrapperElement = document.createElement("div");
  wrapperElement.className = "p-2 product";
  wrapperElement.setAttribute("title", product.title);
  const productElement = document.createElement("i");
  productElement.className = `fa-solid fa-${product.icon} product-icon`;
  wrapperElement.append(productElement);
  return wrapperElement;
}

function addDragable() {
  const productItems = document.querySelectorAll(".product");
  // Добавление элементам продуктам свойства dragable
  for (let item of productItems) {
    item.draggable = true;
  }
}

// Корзина продуктов - коллекция Map
const cart = new Map(); // в качестве ключей будут храниться объекты продуктов, а в качестве значений - количество продуктов

// Заполнение корзины продуктами (drag&drop)
const cartElement = document.querySelector(".cart");

// Начало перетаскивания
productsWrapper.addEventListener("dragstart", (event) => {
  const productTitle = event.target.getAttribute("title");
  event.dataTransfer.setData("title", productTitle);
});

// Наведение продукта на корзину
cartElement.addEventListener("dragover", (event) => {
  event.preventDefault();
  cartElement.style.color = "#40a578";
  cartElement.style.borderColor = "#40a578";
});

// Отведение продукта от корзины
cartElement.addEventListener("dragleave", (event) => {
  cartElement.style.color = "";
  cartElement.style.borderColor = "";
});

// Сброс продукта в корзину
cartElement.addEventListener("drop", (event) => {
  const productName = event.dataTransfer.getData("title");
  const product = products.find((item) => item.title == productName);
  if (cart.has(product)) {
    cart.set(product, cart.get(product) + 1); //product ключ, get(product) - количество товаров
  } else {
    cart.set(product, 1);
  }
  showCart();
  cartElement.style.color = "";
  cartElement.style.borderColor = "";
});

//Функция отображения содержимого корзины
const cartContent = document.querySelector(".cart-content");
function showCart() {
  //   console.log(cart);
  cartContent.innerHTML = "";
  cart.forEach((value, key) => {
    cartContent.insertAdjacentHTML(
      "beforeend",
      `
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class ='ms-2 me-auto'>
            <div class="fw-bold">${key.title}</div>
            Price: $${key.price}
        </div>
        <div>
            <span class="badge rounded-pill">${value}</span>
            <span class="badge badge-delete rounded-pill">
                <i class="fa-solid fa-xmark" data-id="${key.id}" ></i>
            </span>
        </div>
        </li>
        `
    );
  });
  cartContent.insertAdjacentHTML(
    "beforeend",
    `
    <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto fw-bold">
            Total products:
        </div>
        <div>
            <span class='badge badge-total rounded-pill'>${cart.size}</span>
        </div>
    </li>
    `
  );
}

// Удаление продуктов из корзины
cartContent.onclick = function (event) {
  const product = products.find((item) => item.id == event.target.dataset.id);
  cart.delete(product);
  showCart();
};

// Категории продуктов - коллекция Set
const productCategories = products.map((item) => item.category); //получаем массив всех категорий продуктов
const uniqueCategories = new Set(productCategories); //затем заносим их в массив set

// Добавление категорий в раскрывающийся список
const select = document.querySelector(".form-select");
addCategoryOption();
uniqueCategories.forEach((value) => addCategoryOption(value));

function addCategoryOption(category = "all") {
  const option = new Option(category, category);
  select.append(option);
}

// Фильтрация продуктов
select.addEventListener("change", filterProducts);

function filterProducts(event) {
  const option = event.target.value;
  const filteredProducts =
    option == "all"
      ? products
      : products.filter((item) => item.category == option);
  addProducts(filteredProducts);
}
