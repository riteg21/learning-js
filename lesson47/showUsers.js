export function showUsers(users, body) {
  users.forEach((user) => {
    body.append(createRow(user));
  });
}

function createRow(user) {
  const tr = document.createElement("tr");
  const keys = Object.keys(user);
  keys.forEach((key) => {
    const td = document.createElement("td");
    td.innerText = user[key];
    tr.append(td);
  });
  return tr;
}
