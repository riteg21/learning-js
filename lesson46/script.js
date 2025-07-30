"use strict";

// Выбор элементов
const productForm = document.forms["product-form"];
const imagePreview = document.getElementById("image-preview");
const imageInfo = document.getElementById("image-info");
const qpInfo = document.getElementById("qp-info");
const text = document.getElementById("text");

// Отображение информации о изображении
productForm.image.onchange = function () {
  imageInfo.innerHTML = "";
  const [file] = this.files;
  if (file) {
    isImage(file)
      ? getImageInfo(file)
      : (imageInfo.innerText = "File is not image");
  }
};

function isImage(file) {
  return file.name.match(/\.(jpg|jpeg|png|gif)$/i);
}

function getImageInfo(file) {
  imagePreview.src = URL.createObjectURL(file); //создает ссылку на изображение и присваивает ее атрибуту src изображения preview
  addInfoItem("Name: ", file.name, imageInfo);
  addInfoItem("Type: ", file.type, imageInfo);
  addInfoItem("Size: ", `${file.size / 1000} KB`, imageInfo);
  addInfoItem(
    "Last modified: ",
    file.lastModifiedDate.toLocaleDateString("en-US"),
    imageInfo
  );
}

function addInfoItem(key, value, wrapper) {
  const p = document.createElement("p");
  p.innerHTML = `<b>${key} : </b> ${value}`;
  p.className = "mb-2";
  wrapper.append(p);
}

//Рвзбор url адреса
productForm["get-qp"].onclick = function () {
  const url = new URL(document.URL); //создается объект которому передается адрес текущей страницы
  for (let [name, value] of url.searchParams) {
    //url.searchParams содержит параметры URL (то, что идёт после знака ? в адресе)
    addInfoItem(name, value, qpInfo);
  }
};

// метод location -
// 1 assign(url)
// осуществляет переход (редирект) на указанный URL

// 2 reload ([boolean])
// перезагружает текущую страницу. Имеет необязательный булевый параметр: при значении тие страница заново загружается с сервера, при значении false страница может быть загружена из кеша
// 3
// replace(url)
// осуществляет переход (редирект) на указанный URL. В отличии от assign(), текущая страница не будет сохранена в History, и пользователь не сможет использовать кнопку назад, чтобы вернуться к ней
// 4
// toString)
// синоним свойства href, однако он не может использоваться для изменения значения

// range api
// selection api

// Выделение фрагментов документа
const range = new Range(); //создаем объект range
const startPoint = text.textContent.indexOf("Lorem");
range.setStart(text.firstChild, startPoint); // определяем начальную
range.setEnd(text.firstChild, startPoint + 5); // и конечную точки этого диапозона
document.getSelection().addRange(range);

// отслеживание выделения
document.onselectionchange = function () {
  const selection = document.getSelection().toString();
  console.log(selection);
};
