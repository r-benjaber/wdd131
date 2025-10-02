
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


//temple list
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Asunción Paraguay",
        location: "Asunción, Paraguay",
        dedicated: "2002, May, 19",
        area: 11906,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-2415.jpg"
    },
    {
        templeName: "Belém Brazil",
        location: "Belém, Brazil",
        dedicated: "2022, November, 20",
        area: 28675,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310-main.jpg"
    },
    {
        templeName: "Santa Cruz Bolivia",
        location: "Santa Cruz, Bolivia",
        dedicated: "early 2027",
        area: 29000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/santa-cruz-bolivia-temple/santa-cruz-bolivia-temple-48551-main.jpg"
    },
];

const home = document.querySelector("#home");
const old = document.querySelector("#old");
const newT = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");
const subtitle = document.querySelector("#subtitle")

home.addEventListener("click", () => {
    createTempleCard(temples);
    subtitle.textContent = "All Temples";
})

old.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => temple.dedicated.split(", ")[0] < 1900);
    createTempleCard(filteredTemples);
    subtitle.textContent = "Old Temples";
})

newT.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => temple.dedicated.split(", ")[0] > 2000);
    createTempleCard(filteredTemples);
    subtitle.textContent = "New Temples";
})

large.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(filteredTemples);
    subtitle.textContent = "Large Temples";
})

small.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(filteredTemples);
    subtitle.textContent = "Small Temples";
})

function createTempleCard(templeList) {
    document.querySelector(".res-grid").innerHTML = "";
    templeList.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span id="label">Location: </span> ${temple.location}`;
        dedication.innerHTML = `<span id="label">Dedication: </span> ${temple.dedicated}`;
        area.innerHTML = `<span id="label">Size: </span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    })
}