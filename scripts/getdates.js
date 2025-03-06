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
