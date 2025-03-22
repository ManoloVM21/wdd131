/*FOOTER CALCULATIONS*/
const year = document.querySelector("#currentyear")
const modified = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = today.getFullYear();
modified.innerHTML = `Last Modification: <span id="currentyear">${new Intl.DateTimeFormat(
    'en-US', {
        dateStyle: 'medium',
        timeStyle: "medium"
    }).format(today)}</span>`;

/*WEATHER CALCULATIONS*/

const temperature = 10;
const windSpeed = 5;

const calculateWindChill = (temp, windSpeed) => 13.12 + 0.6215 * temp - 11.37 * (windSpeed ** 0.16) + 0.3965 * temp * (windSpeed ** 0.16);

document.querySelector("#temperature").textContent = ` ${temperature} °C`;
document.querySelector("#wind").textContent = `${windSpeed} km/h`;
if (temperature <= 10 & windSpeed >= 4){
    document.querySelector("#windChill").textContent = calculateWindChill(temperature,windSpeed).toFixed(1) + '°C';

} else {
    document.querySelector("#windChill").textContent = "N/A";
}
