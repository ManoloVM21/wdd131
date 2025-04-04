const year = document.querySelector("#currentyear");
const modified = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = today.getFullYear();
modified.innerHTML = `Last Modification: <span id="currentyear">${new Intl.DateTimeFormat(
    'en-US', {
        dateStyle: 'medium',
        timeStyle: "medium"
    }).format(today)}</span>`;

let attempts = localStorage.getItem("attempts") || 0;
attempts++;
document.querySelector("#attempts").textContent = `You have submitted ${attempts} form(s)`;


localStorage.setItem("attempts", attempts);