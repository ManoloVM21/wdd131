const year = document.querySelector("#currentyear");
const modified = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = today.getFullYear()
modified.innerHTML = new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "medium"
	}
).format(today);

let firstName = 'Antonia';
let lastName = 'Francesca';

const fullName = (firstName,lastName) => `${firstName} ${lastName}`;

document.querySelector('#fullname').innerHTML = fullName(firstName,lastName);