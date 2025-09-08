const year = document.querySelector("#currentYear");
const last = document.querySelector("#lastModified");
const today = new Date();
let oLastModif = new Date(document.lastModified);

last.innerHTML = `Last Modified: ${oLastModif.getDate()}/${oLastModif.getMonth()}/${oLastModif.getFullYear()} ${oLastModif.getHours()}:${oLastModif.getMinutes()}:${oLastModif.getSeconds()}`
year.innerHTML = today.getFullYear();
