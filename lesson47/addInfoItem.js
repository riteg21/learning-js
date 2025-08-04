function addInfoItem(key, value, infoMsg) {
  const div = document.createElement("div");
  div.className = "mb-2";
  div.innerHTML = `<b>${key} :</b> ${value}`;
  infoMsg.append(div);
}

export { addInfoItem };
