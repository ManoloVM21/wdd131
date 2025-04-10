const year = document.querySelector("#currentyear");
const modified = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = today.getFullYear();
modified.innerHTML = `Last Modification: <span id="currentyear">${new Intl.DateTimeFormat(
    'en-US', {
        dateStyle: 'medium',
        timeStyle: "medium"
    }).format(today)}</span>`;


let forms = getForm() || [];

function setForm(){
    localStorage.setItem("listOfForms",JSON.stringify(forms))
}
function getForm(){
    return JSON.parse(localStorage.getItem("listOfForms"))
}
let form = document.querySelector("form");
form.addEventListener("submit", function() {
    const preferencesSelected = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.name);

    if (preferencesSelected.includes("other")) {
        const otherText = document.querySelector("#otherText").value.trim();
        if (otherText !== "") {
            preferencesSelected.push(otherText);
        }
    }
    const formData = {
        userName: document.querySelector("#usern").value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value,
        preferences: preferencesSelected,
    };

    forms.push(formData);
    setForm();
});
    