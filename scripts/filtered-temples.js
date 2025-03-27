const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', ()=>{
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

const year = document.querySelector("#currentyear")
const modified = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = today.getFullYear();
modified.innerHTML = `Last Modification: <span id="currentyear">${new Intl.DateTimeFormat(
    'en-US', {
        dateStyle: 'medium',
        timeStyle: "medium"
    }).format(today)}</span>`;


/*DYNAMIC IMAGES*/
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
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 30",
        area: 72000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 21",
        area: 45800,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
    },
    {
        templeName: "Lima Los Olivos",
        location: "Lima, Peru",
        dedicated: "2024, January, 14",
        area: 47413,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42524-main.jpg"
    },
    ];

let temp = `<div class="figuritas">`;
temples.forEach(temple => {temp += `<figure><figcaption><h3>${temple.templeName}</h3></figcaption><figcaption>Location: ${temple.location}</figcaption><figcaption>Dedication: ${temple.dedicated}</figcaption><figcaption>Size: ${temple.area}</figcaption><img src=${temple.imageUrl} alt="${temple.templeName} width=600 height=400 loading="lazy"></figure>`});
temp += `</div>`;
document.querySelector("#figuritas").innerHTML = temp;

function createCard(list){
let temp = `<div class="figuritas">`;
list.forEach(temple => {temp += `<figure><figcaption><h3>${temple.templeName}</h3></figcaption><figcaption>Location: ${temple.location}</figcaption><figcaption>Dedication: ${temple.dedicated}</figcaption><figcaption>Size: ${temple.area}</figcaption><img src=${temple.imageUrl} alt="${temple.templeName}" width=600 height=400 loading="lazy"></figure>`});
temp += `</div>`;
document.querySelector("#figuritas").innerHTML = temp;
};

let old = document.querySelector("#Old");
let oldTemples = temples.filter(temple => Number(temple.dedicated.split(",")[0])<1900);

old.addEventListener("click", () => createCard(oldTemples));

let newlink = document.querySelector("#New");
let newTemples = temples.filter(temple => Number(temple.dedicated.split(",")[0])>2000);
newlink.addEventListener("click", () => createCard(newTemples));


let largeLink = document.querySelector("#Large");
let largeTemples = temples.filter(temple => temple.area>90000);
largeLink.addEventListener("click", () => createCard(largeTemples));

let smallLink = document.querySelector("#Small");
let smallTemples = temples.filter(temple => temple.area<10000);
smallLink.addEventListener("click", () => createCard(smallTemples));
let homeLink = document.querySelector("#Home");
homeLink.addEventListener("click", () => createCard(temples));



