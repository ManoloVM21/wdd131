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
function getForm(){
    return JSON.parse(localStorage.getItem("listOfForms"))
}

let lastestform = forms[forms.length-1];

let preferences = lastestform.preferences.filter(pref => pref !== "other");
document.getElementById("news").textContent= preferences.join(" & ");