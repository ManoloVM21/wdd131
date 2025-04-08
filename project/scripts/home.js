const year = document.querySelector("#currentyear")
const modified = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = today.getFullYear();
modified.innerHTML = `Last Modification: <span id="currentyear">${new Intl.DateTimeFormat(
    'en-US', {
        dateStyle: 'medium',
        timeStyle: "medium"
    }).format(today)}</span>`;

const valChamp = new Date("2025-09-10T00:00:00");
const lolWorlds = new Date("2025-08-10T00:00:00");
const masters = new Date("2025-06-07T00:00:00");
const regional = new Date("2025-02-24T00:00:00");

function getCountdown(date,id){
    const now = new Date();
    const timeRemaining = date - now;

    if (timeRemaining <= 0){
        document.getElementById(id).innerHTML = "Event has passed!";
        return;
    }
    const days = Math.floor(timeRemaining / (1000*60*60*24))
    const hours = Math.floor((timeRemaining % (1000*60*60*24))/(1000*60*60));
    document.getElementById(id).textContent = `${days} days, ${hours} hours left`;
}

getCountdown(valChamp,"countdown-val");
getCountdown(lolWorlds,"countdown-lol");
getCountdown(masters,"countdown-val2");
getCountdown(regional,"countdown-lol2");
