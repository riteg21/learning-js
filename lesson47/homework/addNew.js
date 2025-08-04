import { addToList } from "./addToList.js";

export function addNew(list, items, form) {
  list.innerHTML = "";
  items.push(form.item.value);
  addToList(items, list);
  form.reset();
}
