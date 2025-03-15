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
