export function addItem(item, list) {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerText = item;
  list.append(li);
}
