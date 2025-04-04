const year = document.querySelector("#currentyear");
const modified = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = today.getFullYear();
modified.innerHTML = `Last Modification: <span id="currentyear">${new Intl.DateTimeFormat(
    'en-US', {
        dateStyle: 'medium',
        timeStyle: "medium"
    }).format(today)}</span>`;

const products = [
    {
        id: "fc-1888",
        name: "Flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp equalizer",
        averagerating: 5.0
    }
    ];

const selectEl = document.querySelector("#prodName");
products.forEach(product => {selectEl.innerHTML +=`<option value="${product.id}">${product.name}</option>`});

let forms = getForm() || [];

function setForm(){
    localStorage.setItem("listOfForms",JSON.stringify(forms))
}
function getForm(){
    return JSON.parse(localStorage.getItem("listOfForms"))
}



let form = document.querySelector("form");
form.addEventListener("submit", function() {
    const formData = {
        productName: document.querySelector("#prodName").value,
        rating: document.querySelector('input[name="rating"]:checked').value,
        installationDate: document.querySelector('input[name="date"]').value,
        features: Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.name),
        review: document.querySelector("#review").value,
        userName: document.querySelector("#yourName").value
    };

    forms.push(formData);
    setForm();
});

