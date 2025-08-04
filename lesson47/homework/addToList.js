import { addItem } from "./addItem.js";

export function addToList(items, list) {
  items.forEach((item) => addItem(item, list));
}
