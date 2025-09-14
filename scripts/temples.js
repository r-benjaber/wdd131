
//code for responsive menu
const menbtn = document.querySelector("#menu");
const mainNav = document.querySelector(".navigation");

menbtn.addEventListener("click", function () {
    mainNav.classList.toggle("show");
    menbtn.classList.toggle("show");
})

//Code for footer
const year = document.querySelector("#currentYear");
const last = document.querySelector("#lastModified");
const today = new Date();
let oLastModif = new Date(document.lastModified);

last.innerHTML = `Last Modified: ${oLastModif.getDate()}/${oLastModif.getMonth()}/${oLastModif.getFullYear()} ${oLastModif.getHours()}:${oLastModif.getMinutes()}:${oLastModif.getSeconds()}`
year.innerHTML = today.getFullYear();