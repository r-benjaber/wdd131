const btn = document.querySelector("button");
const inp = document.querySelector("#favchap");
const list = document.querySelector("#list");

const book = document.createElement("li");
const del = document.createElement("button");

book.textContent = inp.value;
del.textContent = "❌";
book.append(del);
list.append(book);