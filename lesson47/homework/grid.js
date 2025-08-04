//импорты
import { items } from "./items.js";
import { addToList } from "./addToList.js";
import { addNew } from "./addNew.js";
// выбор элементов
const form = document.forms.form;
const list = document.querySelector(".list-group");

addToList(items, list);

form.add.addEventListener("click", function () {
  addNew(list, items, form);
});
