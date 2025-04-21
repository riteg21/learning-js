"use strict";

const col1 = document.querySelector(".col-6");
const col2 = col1.cloneNode(true);
col1.after(col2);
